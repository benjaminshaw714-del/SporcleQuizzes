const COUNTRIES = [
  { id: "afghanistan", name: "Afghanistan", sourceCode: "AFG", aliases: [] },
  { id: "armenia", name: "Armenia", sourceCode: "ARM", aliases: [] },
  { id: "azerbaijan", name: "Azerbaijan", sourceCode: "AZE", aliases: [] },
  { id: "bahrain", name: "Bahrain", sourceCode: "BHR", aliases: [] },
  { id: "bangladesh", name: "Bangladesh", sourceCode: "BGD", aliases: [] },
  { id: "bhutan", name: "Bhutan", sourceCode: "BTN", aliases: [] },
  { id: "brunei", name: "Brunei", sourceCode: "BRN", aliases: ["Brunei Darussalam"] },
  { id: "cambodia", name: "Cambodia", sourceCode: "KHM", aliases: [] },
  { id: "china", name: "China", sourceCode: "CHN", aliases: ["People's Republic of China"] },
  { id: "cyprus", name: "Cyprus", sourceCode: "CYP", aliases: [] },
  { id: "georgia", name: "Georgia", sourceCode: "GEO", aliases: [] },
  { id: "india", name: "India", sourceCode: "IND", aliases: [] },
  { id: "indonesia", name: "Indonesia", sourceCode: "IDN", aliases: [] },
  { id: "iran", name: "Iran", sourceCode: "IRN", aliases: ["Islamic Republic of Iran"] },
  { id: "iraq", name: "Iraq", sourceCode: "IRQ", aliases: [] },
  { id: "israel", name: "Israel", sourceCode: "ISR", aliases: [] },
  { id: "japan", name: "Japan", sourceCode: "JPN", aliases: [] },
  { id: "jordan", name: "Jordan", sourceCode: "JOR", aliases: [] },
  { id: "kazakhstan", name: "Kazakhstan", sourceCode: "KAZ", aliases: [] },
  { id: "kuwait", name: "Kuwait", sourceCode: "KWT", aliases: [] },
  { id: "kyrgyzstan", name: "Kyrgyzstan", sourceCode: "KGZ", aliases: [] },
  { id: "laos", name: "Laos", sourceCode: "LAO", aliases: ["Lao PDR", "Laos"] },
  { id: "lebanon", name: "Lebanon", sourceCode: "LBN", aliases: [] },
  { id: "malaysia", name: "Malaysia", sourceCode: "MYS", aliases: [] },
  { id: "maldives", name: "Maldives", sourceCode: "MDV", aliases: [] },
  { id: "mongolia", name: "Mongolia", sourceCode: "MNG", aliases: [] },
  { id: "myanmar", name: "Myanmar", sourceCode: "MMR", aliases: ["Burma"] },
  { id: "nepal", name: "Nepal", sourceCode: "NPL", aliases: [] },
  { id: "north-korea", name: "North Korea", sourceCode: "PRK", aliases: ["DPRK", "Democratic People's Republic of Korea"] },
  { id: "oman", name: "Oman", sourceCode: "OMN", aliases: [] },
  { id: "pakistan", name: "Pakistan", sourceCode: "PAK", aliases: [] },
  { id: "palestine", name: "Palestine", sourceCode: "PSE", aliases: ["State of Palestine"] },
  { id: "philippines", name: "Philippines", sourceCode: "PHL", aliases: [] },
  { id: "qatar", name: "Qatar", sourceCode: "QAT", aliases: [] },
  { id: "russia", name: "Russia", sourceCode: "RUS", aliases: ["Russian Federation"] },
  { id: "saudi-arabia", name: "Saudi Arabia", sourceCode: "SAU", aliases: [] },
  { id: "singapore", name: "Singapore", sourceCode: "SGP", aliases: [] },
  { id: "south-korea", name: "South Korea", sourceCode: "KOR", aliases: ["Republic of Korea"] },
  { id: "sri-lanka", name: "Sri Lanka", sourceCode: "LKA", aliases: [] },
  { id: "syria", name: "Syria", sourceCode: "SYR", aliases: ["Syrian Arab Republic"] },
  { id: "taiwan", name: "Taiwan", sourceCode: "TWN", aliases: ["Republic of China"] },
  { id: "tajikistan", name: "Tajikistan", sourceCode: "TJK", aliases: [] },
  { id: "thailand", name: "Thailand", sourceCode: "THA", aliases: [] },
  { id: "timor-leste", name: "Timor-Leste", sourceCode: "TLS", aliases: ["East Timor"] },
  { id: "turkey", name: "Turkey", sourceCode: "TUR", aliases: ["Türkiye"] },
  { id: "turkmenistan", name: "Turkmenistan", sourceCode: "TKM", aliases: [] },
  { id: "united-arab-emirates", name: "United Arab Emirates", sourceCode: "ARE", aliases: ["UAE"] },
  { id: "uzbekistan", name: "Uzbekistan", sourceCode: "UZB", aliases: [] },
  { id: "vietnam", name: "Vietnam", sourceCode: "VNM", aliases: ["Viet Nam"] },
  { id: "yemen", name: "Yemen", sourceCode: "YEM", aliases: [] },
];

const TOTAL_TIME = 10 * 60;
const MAP_DATA_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";
const SOURCE_NAMES = {
  "north-korea": ["Dem. Rep. Korea", "North Korea"],
  "south-korea": ["Korea", "South Korea", "Republic of Korea"],
  "taiwan": ["Taiwan", "Taiwan*"],
  "timor-leste": ["East Timor", "Timor-Leste"],
  "turkey": ["Turkey", "Türkiye"],
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
    ((longitude - 25) / 155) * 1200,
    ((85 - latitude) / 100) * 600,
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
