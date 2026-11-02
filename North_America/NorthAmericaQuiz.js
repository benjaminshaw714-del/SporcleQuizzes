const COUNTRIES = [
  { id: "canada", name: "Canada", sourceCode: "CAN", aliases: [] },
  { id: "united-states", name: "United States", sourceCode: "USA", aliases: ["US", "USA", "United States of America"] },
  { id: "mexico", name: "Mexico", sourceCode: "MEX", aliases: [] },
  { id: "belize", name: "Belize", sourceCode: "BLZ", aliases: [] },
  { id: "costa-rica", name: "Costa Rica", sourceCode: "CRI", aliases: [] },
  { id: "el-salvador", name: "El Salvador", sourceCode: "SLV", aliases: [] },
  { id: "guatemala", name: "Guatemala", sourceCode: "GTM", aliases: [] },
  { id: "honduras", name: "Honduras", sourceCode: "HND", aliases: [] },
  { id: "nicaragua", name: "Nicaragua", sourceCode: "NIC", aliases: [] },
  { id: "panama", name: "Panama", sourceCode: "PAN", aliases: [] },
  { id: "antigua-and-barbuda", name: "Antigua and Barbuda", sourceCode: "ATG", aliases: ["Antigua"] },
  { id: "bahamas", name: "Bahamas", sourceCode: "BHS", aliases: ["The Bahamas"] },
  { id: "barbados", name: "Barbados", sourceCode: "BRB", aliases: [] },
  { id: "cuba", name: "Cuba", sourceCode: "CUB", aliases: [] },
  { id: "dominica", name: "Dominica", sourceCode: "DMA", aliases: [] },
  { id: "dominican-republic", name: "Dominican Republic", sourceCode: "DOM", aliases: [] },
  { id: "grenada", name: "Grenada", sourceCode: "GRD", aliases: [] },
  { id: "haiti", name: "Haiti", sourceCode: "HTI", aliases: [] },
  { id: "jamaica", name: "Jamaica", sourceCode: "JAM", aliases: [] },
  { id: "saint-kitts-and-nevis", name: "Saint Kitts and Nevis", sourceCode: "KNA", aliases: ["St Kitts and Nevis", "St Kitts"] },
  { id: "saint-lucia", name: "Saint Lucia", sourceCode: "LCA", aliases: ["St Lucia"] },
  { id: "saint-vincent-and-the-grenadines", name: "Saint Vincent and the Grenadines", sourceCode: "VCT", aliases: ["St Vincent and the Grenadines", "Saint Vincent"] },
  { id: "trinidad-and-tobago", name: "Trinidad and Tobago", sourceCode: "TTO", aliases: ["Trinidad"] },
];

const TOTAL_TIME = 10 * 60;
const MAP_DATA_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";
const SOURCE_NAMES = {
  "united-states": ["United States of America"],
  "bahamas": ["The Bahamas", "Bahamas"],
  "antigua-and-barbuda": ["Antigua", "Antigua and Barb."],
  "dominican-republic": ["Dominican Rep."],
  "saint-kitts-and-nevis": ["St. Kitts and Nevis", "St. Kitts-Nevis"],
  "saint-vincent-and-the-grenadines": ["Saint Vincent", "St. Vincent"],
};
const guessedCountries = new Set();
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
const giveUpButton = document.getElementById("give-up-btn");
const endScreen = document.getElementById("end-screen");
const endTitle = document.getElementById("end-title");
const endScore = document.getElementById("end-score");
const playAgainButton = document.getElementById("play-again-btn");
const missingSection = document.getElementById("missing-section");
const missingCopy = document.getElementById("missing-copy");
const missingList = document.getElementById("missing-list");
const mapPlayAgainButton = document.getElementById("map-play-again-btn");

let timeRemaining = TOTAL_TIME;
let timerId = null;
let gameFinished = false;

function projectPoint([longitude, latitude]) {
  return [
    ((longitude + 170) / 115) * 1000,
    ((84 - latitude) / 79) * 620,
  ];
}

function geometryToPath(geometry) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons
    .map((polygon) => polygon
      .map((ring) => `${ring.map((point, index) => {
        const [x, y] = projectPoint(point);
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
      }).join(" ")} Z`)
      .join(" "))
    .join(" ");
}

function getSourceCountryId(properties) {
  const sourceCodes = [
    properties.ISO_A3,
    properties.ISO_A3_EH,
    properties.ADM0_A3,
    properties.GU_A3,
  ]
    .filter(Boolean)
    .map((code) => String(code).toUpperCase());

  const codeMatch = COUNTRIES.find((country) =>
    sourceCodes.includes(country.sourceCode)
  );

  if (codeMatch) {
    return codeMatch.id;
  }

  const sourceNames = [
    properties.NAME,
    properties.NAME_LONG,
    properties.ADMIN,
    properties.SOVEREIGNT,
  ]
    .filter(Boolean)
    .map(normalizeName);

  return COUNTRIES.find((country) => {
    const acceptedNames = [
      country.name,
      ...country.aliases,
      ...(SOURCE_NAMES[country.id] || []),
    ].map(normalizeName);

    return acceptedNames.some((name) => sourceNames.includes(name));
  })?.id;
}

function renderMap(featureCollection) {
  const contextLayer = document.getElementById("map-context");
  const countryLayer = document.getElementById("map-countries");
  contextLayer.replaceChildren();
  countryLayer.replaceChildren();

  featureCollection.features.forEach((feature) => {
    const countryId = getSourceCountryId(feature.properties);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", geometryToPath(feature.geometry));
    path.setAttribute("class", countryId ? "country-region" : "context-region");
    path.setAttribute("stroke-linejoin", "round");

    if (countryId) {
      path.setAttribute("data-country", countryId);
      path.tabIndex = 0;
      path.setAttribute("aria-label",COUNTRIES.find((country) => country.id === countryId).name);
      countryLayer.appendChild(path);
    } 
    else {
      contextLayer.appendChild(path);
    }
  });

}

function setCountryState(countryId, state) {
  // Query all paths that belong to this country and add the state class to every one of them
  const regions = document.querySelectorAll(`path[data-country="${countryId}"]`);
  regions.forEach(region => region.classList.add(state));
}

async function loadMap() {
  try {
    const response = await fetch(MAP_DATA_URL);
    if (!response.ok) throw new Error(`Map request failed: ${response.status}`);
    renderMap(await response.json());
  } catch (error) {
    setMessage("The map could not load. Check your internet connection and reload the quiz.", true);
    console.error(error);
  }
}

function normalizeName(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function setMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function updateScore() {
  score.textContent = `${guessedCountries.size} / ${COUNTRIES.length}`;
}

function updateTimer() {
  timer.textContent = formatTime(timeRemaining);
  timer.classList.toggle("urgent", timeRemaining <= 60);
}

function setCountryLabel(countryId, visible) {
  const label = document.getElementById(`label-${countryId}`);
  if (label) label.classList.toggle("visible", visible);
}

function clearCountryStates() {
  document.querySelectorAll(".country-region").forEach((region) => {
    region.classList.remove("guessed", "missing");
  });
  COUNTRIES.forEach((country) => setCountryLabel(country.id, false));
}

function getCountryByGuess(normalizedGuess) {
  return COUNTRIES.find((country) => {
    const acceptedNames = [country.name, ...country.aliases];
    return acceptedNames.some((name) => normalizeName(name) === normalizedGuess);
  });
}

function renderMissingCountries() {
  const missingCountries = COUNTRIES.filter((country) => !guessedCountries.has(country.id));
  missingList.innerHTML = "";
  missingCountries.forEach((country) => {
    const item = document.createElement("li");
    item.textContent = country.name;
    missingList.appendChild(item);
    setCountryState(country.id, "missing");
    setCountryLabel(country.id, true);
  });
  missingSection.classList.toggle("hidden", missingCountries.length === 0);
  missingCopy.textContent = missingCountries.length
    ? `${missingCountries.length} ${missingCountries.length === 1 ? "country was" : "countries were"} not guessed.`
    : "You found every country.";
}

function finishGame(title, revealMissing = false) {
  gameFinished = true;
  clearInterval(timerId);
  guessInput.disabled = true;
  giveUpButton.disabled = true;
  if (revealMissing) renderMissingCountries();
  endTitle.textContent = title;
  endScore.textContent = `Final score: ${guessedCountries.size} / ${COUNTRIES.length}`;
  endScreen.classList.remove("hidden");
}

function handleGuess(event) {
  event.preventDefault();
  if (gameFinished) return;

  const guess = guessInput.value.trim();
  if (!guess) {
    setMessage("Type a country name first.", true);
    return;
  }

  const country = getCountryByGuess(normalizeName(guess));
  if (!country) {
    setMessage("That's not one a country in this quiz.", true);
    guessInput.select();
    return;
  }

  if (guessedCountries.has(country.id)) {
    setMessage(`${country.name} is already on the map.`, true);
    guessInput.select();
    return;
  }

  guessedCountries.add(country.id);
  setCountryState(country.id, "guessed");
  setCountryLabel(country.id, true);
  updateScore();
  guessInput.value = "";
  setMessage(`${country.name} is on the map!`);

  if (guessedCountries.size === COUNTRIES.length) {
    finishGame("Congratulations!");
  } else {
    guessInput.focus();
  }
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeRemaining -= 1;
    updateTimer();
    if (timeRemaining <= 0) finishGame("Time's up", true);
  }, 1000);
}

function resetGame() {
  guessedCountries.clear();
  gameFinished = false;
  timeRemaining = TOTAL_TIME;
  clearCountryStates();
  missingSection.classList.add("hidden");
  missingList.innerHTML = "";
  endScreen.classList.add("hidden");
  mapPlayAgainButton.classList.add("hidden");
  guessInput.disabled = false;
  giveUpButton.disabled = false;
  guessInput.value = "";
  updateScore();
  updateTimer();
  setMessage("Every correct answer fills part of the map.");
  startTimer();
  guessInput.focus();
}

guessForm.addEventListener("submit", handleGuess);
giveUpButton.addEventListener("click", () => finishGame("Game over", true));
playAgainButton.addEventListener("click", resetGame);
mapPlayAgainButton.addEventListener("click", resetGame);
document.getElementById("exit-end-screen-btn").addEventListener("click", () => {
  endScreen.classList.add("hidden");
  mapPlayAgainButton.classList.remove("hidden");
});

updateScore();
updateTimer();
startTimer();
guessInput.focus();
loadMap();
