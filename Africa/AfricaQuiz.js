const COUNTRIES = [
  { id: "algeria", name: "Algeria", sourceCode: "DZA", aliases: [] },
  { id: "angola", name: "Angola", sourceCode: "AGO", aliases: [] },
  { id: "benin", name: "Benin", sourceCode: "BEN", aliases: [] },
  { id: "botswana", name: "Botswana", sourceCode: "BWA", aliases: [] },
  { id: "burkina-faso", name: "Burkina Faso", sourceCode: "BFA", aliases: [] },
  { id: "burundi", name: "Burundi", sourceCode: "BDI", aliases: [] },
  { id: "cabo-verde", name: "Cabo Verde", sourceCode: "CPV", aliases: ["Cape Verde"] },
  { id: "cameroon", name: "Cameroon", sourceCode: "CMR", aliases: [] },
  { id: "central-african-republic", name: "Central African Republic", sourceCode: "CAF", aliases: ["CAR"] },
  { id: "chad", name: "Chad", sourceCode: "TCD", aliases: [] },
  { id: "comoros", name: "Comoros", sourceCode: "COM", aliases: [] },
  { id: "democratic-republic-of-the-congo", name: "Democratic Republic of the Congo", sourceCode: "COD", aliases: ["DR Congo", "DRC", "Congo-Kinshasa"] },
  { id: "republic-of-the-congo", name: "Republic of the Congo", sourceCode: "COG", aliases: ["Congo", "Congo-Brazzaville"] },
  { id: "cote-divoire", name: "Côte d'Ivoire", sourceCode: "CIV", aliases: ["Cote d'Ivoire", "Ivory Coast"] },
  { id: "djibouti", name: "Djibouti", sourceCode: "DJI", aliases: [] },
  { id: "egypt", name: "Egypt", sourceCode: "EGY", aliases: [] },
  { id: "equatorial-guinea", name: "Equatorial Guinea", sourceCode: "GNQ", aliases: [] },
  { id: "eritrea", name: "Eritrea", sourceCode: "ERI", aliases: [] },
  { id: "eswatini", name: "Eswatini", sourceCode: "SWZ", aliases: ["Swaziland"] },
  { id: "ethiopia", name: "Ethiopia", sourceCode: "ETH", aliases: [] },
  { id: "gabon", name: "Gabon", sourceCode: "GAB", aliases: [] },
  { id: "gambia", name: "Gambia", sourceCode: "GMB", aliases: ["The Gambia"] },
  { id: "ghana", name: "Ghana", sourceCode: "GHA", aliases: [] },
  { id: "guinea", name: "Guinea", sourceCode: "GIN", aliases: [] },
  { id: "guinea-bissau", name: "Guinea-Bissau", sourceCode: "GNB", aliases: [] },
  { id: "kenya", name: "Kenya", sourceCode: "KEN", aliases: [] },
  { id: "lesotho", name: "Lesotho", sourceCode: "LSO", aliases: [] },
  { id: "liberia", name: "Liberia", sourceCode: "LBR", aliases: [] },
  { id: "libya", name: "Libya", sourceCode: "LBY", aliases: [] },
  { id: "madagascar", name: "Madagascar", sourceCode: "MDG", aliases: [] },
  { id: "malawi", name: "Malawi", sourceCode: "MWI", aliases: [] },
  { id: "mali", name: "Mali", sourceCode: "MLI", aliases: [] },
  { id: "mauritania", name: "Mauritania", sourceCode: "MRT", aliases: [] },
  { id: "mauritius", name: "Mauritius", sourceCode: "MUS", aliases: [] },
  { id: "morocco", name: "Morocco", sourceCode: "MAR", aliases: [] },
  { id: "mozambique", name: "Mozambique", sourceCode: "MOZ", aliases: [] },
  { id: "namibia", name: "Namibia", sourceCode: "NAM", aliases: [] },
  { id: "niger", name: "Niger", sourceCode: "NER", aliases: [] },
  { id: "nigeria", name: "Nigeria", sourceCode: "NGA", aliases: [] },
  { id: "rwanda", name: "Rwanda", sourceCode: "RWA", aliases: [] },
  { id: "sao-tome-and-principe", name: "São Tomé and Príncipe", sourceCode: "STP", aliases: ["Sao Tome and Principe"] },
  { id: "senegal", name: "Senegal", sourceCode: "SEN", aliases: [] },
  { id: "seychelles", name: "Seychelles", sourceCode: "SYC", aliases: [] },
  { id: "sierra-leone", name: "Sierra Leone", sourceCode: "SLE", aliases: [] },
  { id: "somalia", name: "Somalia", sourceCode: "SOM", aliases: [] },
  { id: "south-africa", name: "South Africa", sourceCode: "ZAF", aliases: [] },
  { id: "south-sudan", name: "South Sudan", sourceCode: "SSD", aliases: [] },
  { id: "sudan", name: "Sudan", sourceCode: "SDN", aliases: [] },
  { id: "tanzania", name: "Tanzania", sourceCode: "TZA", aliases: ["United Republic of Tanzania"] },
  { id: "togo", name: "Togo", sourceCode: "TGO", aliases: [] },
  { id: "tunisia", name: "Tunisia", sourceCode: "TUN", aliases: [] },
  { id: "uganda", name: "Uganda", sourceCode: "UGA", aliases: [] },
  { id: "zambia", name: "Zambia", sourceCode: "ZMB", aliases: [] },
  { id: "zimbabwe", name: "Zimbabwe", sourceCode: "ZWE", aliases: [] },
];

const TOTAL_TIME = 10 * 60;
const MAP_DATA_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";
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
    ((longitude + 30) / 95) * 800,
    ((40 - latitude) / 80) * 850,
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
    const acceptedNames = [country.name, ...country.aliases].map(normalizeName);

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
