const COUNTRIES = [
  { id: "afghanistan", name: "Afghanistan", sourceCode: "AFG", aliases: [] },
  { id: "albania", name: "Albania", sourceCode: "ALB", aliases: [] },
  { id: "algeria", name: "Algeria", sourceCode: "DZA", aliases: [] },
  { id: "andorra", name: "Andorra", sourceCode: "AND", aliases: [] },
  { id: "angola", name: "Angola", sourceCode: "AGO", aliases: [] },
  { id: "antigua-and-barbuda", name: "Antigua and Barbuda", sourceCode: "ATG", aliases: [] },
  { id: "argentina", name: "Argentina", sourceCode: "ARG", aliases: [] },
  { id: "armenia", name: "Armenia", sourceCode: "ARM", aliases: [] },
  { id: "australia", name: "Australia", sourceCode: "AUS", aliases: [] },
  { id: "austria", name: "Austria", sourceCode: "AUT", aliases: [] },
  { id: "azerbaijan", name: "Azerbaijan", sourceCode: "AZE", aliases: [] },
  { id: "bahamas", name: "Bahamas", sourceCode: "BHS", aliases: ["The Bahamas"] },
  { id: "bahrain", name: "Bahrain", sourceCode: "BHR", aliases: [] },
  { id: "bangladesh", name: "Bangladesh", sourceCode: "BGD", aliases: [] },
  { id: "barbados", name: "Barbados", sourceCode: "BRB", aliases: [] },
  { id: "belarus", name: "Belarus", sourceCode: "BLR", aliases: [] },
  { id: "belgium", name: "Belgium", sourceCode: "BEL", aliases: [] },
  { id: "belize", name: "Belize", sourceCode: "BLZ", aliases: [] },
  { id: "benin", name: "Benin", sourceCode: "BEN", aliases: [] },
  { id: "bhutan", name: "Bhutan", sourceCode: "BTN", aliases: [] },
  { id: "bolivia", name: "Bolivia", sourceCode: "BOL", aliases: ["Bolivia (Plurinational State of)"] },
  { id: "bosnia-and-herzegovina", name: "Bosnia and Herzegovina", sourceCode: "BIH", aliases: ["Bosnia"] },
  { id: "botswana", name: "Botswana", sourceCode: "BWA", aliases: [] },
  { id: "brazil", name: "Brazil", sourceCode: "BRA", aliases: [] },
  { id: "brunei", name: "Brunei", sourceCode: "BRN", aliases: ["Brunei Darussalam"] },
  { id: "bulgaria", name: "Bulgaria", sourceCode: "BGR", aliases: [] },
  { id: "burkina-faso", name: "Burkina Faso", sourceCode: "BFA", aliases: [] },
  { id: "burundi", name: "Burundi", sourceCode: "BDI", aliases: [] },
  { id: "cabo-verde", name: "Cabo Verde", sourceCode: "CPV", aliases: ["Cape Verde"] },
  { id: "cambodia", name: "Cambodia", sourceCode: "KHM", aliases: [] },
  { id: "cameroon", name: "Cameroon", sourceCode: "CMR", aliases: [] },
  { id: "canada", name: "Canada", sourceCode: "CAN", aliases: [] },
  { id: "central-african-republic", name: "Central African Republic", sourceCode: "CAF", aliases: [] },
  { id: "chad", name: "Chad", sourceCode: "TCD", aliases: [] },
  { id: "chile", name: "Chile", sourceCode: "CHL", aliases: [] },
  { id: "china", name: "China", sourceCode: "CHN", aliases: [] },
  { id: "colombia", name: "Colombia", sourceCode: "COL", aliases: [] },
  { id: "comoros", name: "Comoros", sourceCode: "COM", aliases: [] },
  { id: "congo", name: "Republic of the Congo", sourceCode: "COG", aliases: ["Congo", "Congo-Brazzaville"] },
  { id: "costa-rica", name: "Costa Rica", sourceCode: "CRI", aliases: [] },
  { id: "cote-divoire", name: "Cote d'Ivoire", sourceCode: "CIV", aliases: ["Ivory Coast"] },
  { id: "croatia", name: "Croatia", sourceCode: "HRV", aliases: [] },
  { id: "cuba", name: "Cuba", sourceCode: "CUB", aliases: [] },
  { id: "cyprus", name: "Cyprus", sourceCode: "CYP", aliases: [] },
  { id: "czechia", name: "Czechia", sourceCode: "CZE", aliases: ["Czech Republic"] },
  { id: "democratic-republic-of-the-congo", name: "Democratic Republic of the Congo", sourceCode: "COD", aliases: ["DR Congo", "DRC", "Congo-Kinshasa"] },
  { id: "denmark", name: "Denmark", sourceCode: "DNK", aliases: [] },
  { id: "djibouti", name: "Djibouti", sourceCode: "DJI", aliases: [] },
  { id: "dominica", name: "Dominica", sourceCode: "DMA", aliases: [] },
  { id: "dominican-republic", name: "Dominican Republic", sourceCode: "DOM", aliases: [] },
  { id: "ecuador", name: "Ecuador", sourceCode: "ECU", aliases: [] },
  { id: "egypt", name: "Egypt", sourceCode: "EGY", aliases: [] },
  { id: "el-salvador", name: "El Salvador", sourceCode: "SLV", aliases: [] },
  { id: "equatorial-guinea", name: "Equatorial Guinea", sourceCode: "GNQ", aliases: [] },
  { id: "eritrea", name: "Eritrea", sourceCode: "ERI", aliases: [] },
  { id: "estonia", name: "Estonia", sourceCode: "EST", aliases: [] },
  { id: "eswatini", name: "Eswatini", sourceCode: "SWZ", aliases: ["Swaziland"] },
  { id: "ethiopia", name: "Ethiopia", sourceCode: "ETH", aliases: [] },
  { id: "fiji", name: "Fiji", sourceCode: "FJI", aliases: [] },
  { id: "finland", name: "Finland", sourceCode: "FIN", aliases: [] },
  { id: "france", name: "France", sourceCode: "FRA", aliases: [] },
  { id: "gabon", name: "Gabon", sourceCode: "GAB", aliases: [] },
  { id: "gambia", name: "Gambia", sourceCode: "GMB", aliases: ["The Gambia"] },
  { id: "georgia", name: "Georgia", sourceCode: "GEO", aliases: [] },
  { id: "germany", name: "Germany", sourceCode: "DEU", aliases: [] },
  { id: "ghana", name: "Ghana", sourceCode: "GHA", aliases: [] },
  { id: "greece", name: "Greece", sourceCode: "GRC", aliases: [] },
  { id: "grenada", name: "Grenada", sourceCode: "GRD", aliases: [] },
  { id: "guatemala", name: "Guatemala", sourceCode: "GTM", aliases: [] },
  { id: "guinea", name: "Guinea", sourceCode: "GIN", aliases: [] },
  { id: "guinea-bissau", name: "Guinea-Bissau", sourceCode: "GNB", aliases: [] },
  { id: "guyana", name: "Guyana", sourceCode: "GUY", aliases: [] },
  { id: "haiti", name: "Haiti", sourceCode: "HTI", aliases: [] },
  { id: "honduras", name: "Honduras", sourceCode: "HND", aliases: [] },
  { id: "hungary", name: "Hungary", sourceCode: "HUN", aliases: [] },
  { id: "iceland", name: "Iceland", sourceCode: "ISL", aliases: [] },
  { id: "india", name: "India", sourceCode: "IND", aliases: [] },
  { id: "indonesia", name: "Indonesia", sourceCode: "IDN", aliases: [] },
  { id: "iran", name: "Iran", sourceCode: "IRN", aliases: ["Iran (Islamic Republic of)"] },
  { id: "iraq", name: "Iraq", sourceCode: "IRQ", aliases: [] },
  { id: "ireland", name: "Ireland", sourceCode: "IRL", aliases: [] },
  { id: "israel", name: "Israel", sourceCode: "ISR", aliases: [] },
  { id: "italy", name: "Italy", sourceCode: "ITA", aliases: [] },
  { id: "jamaica", name: "Jamaica", sourceCode: "JAM", aliases: [] },
  { id: "japan", name: "Japan", sourceCode: "JPN", aliases: [] },
  { id: "jordan", name: "Jordan", sourceCode: "JOR", aliases: [] },
  { id: "kazakhstan", name: "Kazakhstan", sourceCode: "KAZ", aliases: [] },
  { id: "kenya", name: "Kenya", sourceCode: "KEN", aliases: [] },
  { id: "kiribati", name: "Kiribati", sourceCode: "KIR", aliases: [] },
  { id: "kosovo", name: "Kosovo", sourceCode: "XKS", aliases: [] },
  { id: "kuwait", name: "Kuwait", sourceCode: "KWT", aliases: [] },
  { id: "kyrgyzstan", name: "Kyrgyzstan", sourceCode: "KGZ", aliases: [] },
  { id: "laos", name: "Laos", sourceCode: "LAO", aliases: ["Lao PDR"] },
  { id: "latvia", name: "Latvia", sourceCode: "LVA", aliases: [] },
  { id: "lebanon", name: "Lebanon", sourceCode: "LBN", aliases: [] },
  { id: "lesotho", name: "Lesotho", sourceCode: "LSO", aliases: [] },
  { id: "liberia", name: "Liberia", sourceCode: "LBR", aliases: [] },
  { id: "libya", name: "Libya", sourceCode: "LBY", aliases: [] },
  { id: "liechtenstein", name: "Liechtenstein", sourceCode: "LIE", aliases: [] },
  { id: "lithuania", name: "Lithuania", sourceCode: "LTU", aliases: [] },
  { id: "luxembourg", name: "Luxembourg", sourceCode: "LUX", aliases: [] },
  { id: "madagascar", name: "Madagascar", sourceCode: "MDG", aliases: [] },
  { id: "malawi", name: "Malawi", sourceCode: "MWI", aliases: [] },
  { id: "malaysia", name: "Malaysia", sourceCode: "MYS", aliases: [] },
  { id: "maldives", name: "Maldives", sourceCode: "MDV", aliases: [] },
  { id: "mali", name: "Mali", sourceCode: "MLI", aliases: [] },
  { id: "malta", name: "Malta", sourceCode: "MLT", aliases: [] },
  { id: "marshall-islands", name: "Marshall Islands", sourceCode: "MHL", aliases: [] },
  { id: "mauritania", name: "Mauritania", sourceCode: "MRT", aliases: [] },
  { id: "mauritius", name: "Mauritius", sourceCode: "MUS", aliases: [] },
  { id: "mexico", name: "Mexico", sourceCode: "MEX", aliases: [] },
  { id: "micronesia", name: "Micronesia", sourceCode: "FSM", aliases: ["Federated States of Micronesia"] },
  { id: "moldova", name: "Moldova", sourceCode: "MDA", aliases: ["Republic of Moldova"] },
  { id: "monaco", name: "Monaco", sourceCode: "MCO", aliases: [] },
  { id: "mongolia", name: "Mongolia", sourceCode: "MNG", aliases: [] },
  { id: "montenegro", name: "Montenegro", sourceCode: "MNE", aliases: [] },
  { id: "morocco", name: "Morocco", sourceCode: "MAR", aliases: [] },
  { id: "mozambique", name: "Mozambique", sourceCode: "MOZ", aliases: [] },
  { id: "myanmar", name: "Myanmar", sourceCode: "MMR", aliases: ["Burma"] },
  { id: "namibia", name: "Namibia", sourceCode: "NAM", aliases: [] },
  { id: "nauru", name: "Nauru", sourceCode: "NRU", aliases: [] },
  { id: "nepal", name: "Nepal", sourceCode: "NPL", aliases: [] },
  { id: "netherlands", name: "Netherlands", sourceCode: "NLD", aliases: ["The Netherlands", "Holland"] },
  { id: "new-zealand", name: "New Zealand", sourceCode: "NZL", aliases: [] },
  { id: "nicaragua", name: "Nicaragua", sourceCode: "NIC", aliases: [] },
  { id: "niger", name: "Niger", sourceCode: "NER", aliases: [] },
  { id: "nigeria", name: "Nigeria", sourceCode: "NGA", aliases: [] },
  { id: "north-korea", name: "North Korea", sourceCode: "PRK", aliases: ["DPRK"] },
  { id: "north-macedonia", name: "North Macedonia", sourceCode: "MKD", aliases: ["Macedonia"] },
  { id: "norway", name: "Norway", sourceCode: "NOR", aliases: [] },
  { id: "oman", name: "Oman", sourceCode: "OMN", aliases: [] },
  { id: "pakistan", name: "Pakistan", sourceCode: "PAK", aliases: [] },
  { id: "palau", name: "Palau", sourceCode: "PLW", aliases: [] },
  { id: "palestine", name: "Palestine", sourceCode: "PSE", aliases: ["State of Palestine"] },
  { id: "panama", name: "Panama", sourceCode: "PAN", aliases: [] },
  { id: "papua-new-guinea", name: "Papua New Guinea", sourceCode: "PNG", aliases: [] },
  { id: "paraguay", name: "Paraguay", sourceCode: "PRY", aliases: [] },
  { id: "peru", name: "Peru", sourceCode: "PER", aliases: [] },
  { id: "philippines", name: "Philippines", sourceCode: "PHL", aliases: [] },
  { id: "poland", name: "Poland", sourceCode: "POL", aliases: [] },
  { id: "portugal", name: "Portugal", sourceCode: "PRT", aliases: [] },
  { id: "qatar", name: "Qatar", sourceCode: "QAT", aliases: [] },
  { id: "romania", name: "Romania", sourceCode: "ROU", aliases: [] },
  { id: "russia", name: "Russia", sourceCode: "RUS", aliases: ["Russian Federation"] },
  { id: "rwanda", name: "Rwanda", sourceCode: "RWA", aliases: [] },
  { id: "saint-kitts-and-nevis", name: "Saint Kitts and Nevis", sourceCode: "KNA", aliases: ["St Kitts and Nevis"] },
  { id: "saint-lucia", name: "Saint Lucia", sourceCode: "LCA", aliases: ["St Lucia"] },
  { id: "saint-vincent-and-the-grenadines", name: "Saint Vincent and the Grenadines", sourceCode: "VCT", aliases: ["St Vincent and the Grenadines", "St. Vincent and Grenadines"] },
  { id: "samoa", name: "Samoa", sourceCode: "WSM", aliases: [] },
  { id: "san-marino", name: "San Marino", sourceCode: "SMR", aliases: [] },
  { id: "sao-tome-and-principe", name: "Sao Tome and Principe", sourceCode: "STP", aliases: ["São Tomé and Príncipe"] },
  { id: "saudi-arabia", name: "Saudi Arabia", sourceCode: "SAU", aliases: [] },
  { id: "senegal", name: "Senegal", sourceCode: "SEN", aliases: [] },
  { id: "serbia", name: "Serbia", sourceCode: "SRB", aliases: [] },
  { id: "seychelles", name: "Seychelles", sourceCode: "SYC", aliases: [] },
  { id: "sierra-leone", name: "Sierra Leone", sourceCode: "SLE", aliases: [] },
  { id: "singapore", name: "Singapore", sourceCode: "SGP", aliases: [] },
  { id: "slovakia", name: "Slovakia", sourceCode: "SVK", aliases: [] },
  { id: "slovenia", name: "Slovenia", sourceCode: "SVN", aliases: [] },
  { id: "solomon-islands", name: "Solomon Islands", sourceCode: "SLB", aliases: [] },
  { id: "somalia", name: "Somalia", sourceCode: "SOM", aliases: [] },
  { id: "south-africa", name: "South Africa", sourceCode: "ZAF", aliases: [] },
  { id: "south-korea", name: "South Korea", sourceCode: "KOR", aliases: ["Republic of Korea"] },
  { id: "south-sudan", name: "South Sudan", sourceCode: "SSD", aliases: [] },
  { id: "spain", name: "Spain", sourceCode: "ESP", aliases: [] },
  { id: "sri-lanka", name: "Sri Lanka", sourceCode: "LKA", aliases: [] },
  { id: "sudan", name: "Sudan", sourceCode: "SDN", aliases: [] },
  { id: "suriname", name: "Suriname", sourceCode: "SUR", aliases: [] },
  { id: "sweden", name: "Sweden", sourceCode: "SWE", aliases: [] },
  { id: "switzerland", name: "Switzerland", sourceCode: "CHE", aliases: [] },
  { id: "syria", name: "Syria", sourceCode: "SYR", aliases: [] },
  { id: "taiwan", name: "Taiwan", sourceCode: "TWN", aliases: [] },
  { id: "tajikistan", name: "Tajikistan", sourceCode: "TJK", aliases: [] },
  { id: "tanzania", name: "Tanzania", sourceCode: "TZA", aliases: ["United Republic of Tanzania"] },
  { id: "thailand", name: "Thailand", sourceCode: "THA", aliases: [] },
  { id: "timor-leste", name: "Timor-Leste", sourceCode: "TLS", aliases: ["East Timor"] },
  { id: "togo", name: "Togo", sourceCode: "TGO", aliases: [] },
  { id: "tonga", name: "Tonga", sourceCode: "TON", aliases: [] },
  { id: "trinidad-and-tobago", name: "Trinidad and Tobago", sourceCode: "TTO", aliases: [] },
  { id: "tunisia", name: "Tunisia", sourceCode: "TUN", aliases: [] },
  { id: "turkey", name: "Turkey", sourceCode: "TUR", aliases: ["Türkiye"] },
  { id: "turkmenistan", name: "Turkmenistan", sourceCode: "TKM", aliases: [] },
  { id: "tuvalu", name: "Tuvalu", sourceCode: "TUV", aliases: [] },
  { id: "uganda", name: "Uganda", sourceCode: "UGA", aliases: [] },
  { id: "ukraine", name: "Ukraine", sourceCode: "UKR", aliases: [] },
  { id: "united-arab-emirates", name: "United Arab Emirates", sourceCode: "ARE", aliases: ["UAE"] },
  { id: "united-kingdom", name: "United Kingdom", sourceCode: "GBR", aliases: ["UK", "Great Britain"] },
  { id: "united-states", name: "United States", sourceCode: "USA", aliases: ["United States of America", "US", "USA"] },
  { id: "uruguay", name: "Uruguay", sourceCode: "URY", aliases: [] },
  { id: "uzbekistan", name: "Uzbekistan", sourceCode: "UZB", aliases: [] },
  { id: "vanuatu", name: "Vanuatu", sourceCode: "VUT", aliases: [] },
  { id: "vatican-city", name: "Vatican City", sourceCode: "VAT", aliases: ["Vatican", "Holy See"] },
  { id: "venezuela", name: "Venezuela", sourceCode: "VEN", aliases: ["Venezuela (Bolivarian Republic of)"] },
  { id: "vietnam", name: "Vietnam", sourceCode: "VNM", aliases: ["Viet Nam"] },
  { id: "yemen", name: "Yemen", sourceCode: "YEM", aliases: [] },
  { id: "zambia", name: "Zambia", sourceCode: "ZMB", aliases: [] },
  { id: "zimbabwe", name: "Zimbabwe", sourceCode: "ZWE", aliases: [] },
];

const TOTAL_TIME = 20 * 60;
const MAP_DATA_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";
const SOURCE_NAMES = {
  "cote-divoire": ["Ivory Coast", "Côte d'Ivoire"],
  "democratic-republic-of-the-congo": ["Dem. Rep. Congo", "DR Congo"],
  "congo": ["Republic of the Congo", "Congo"],
  "gambia": ["The Gambia"],
  "laos": ["Lao PDR"],
  "micronesia": ["Federated States of Micronesia"],
  "north-korea": ["Dem. Rep. Korea"],
  "palestine": ["Palestine", "Palestinian Territories"],
  "south-korea": ["Republic of Korea", "Korea"],
  "taiwan": ["Taiwan"],
  "united-states": ["United States of America"],
  "tanzania": ["United Republic of Tanzania"],
  "eswatini": ["eSwatini"],
  "bosnia-and-herzegovina": ["Bosnia and Herz.", "Bosnia and Herzegovina"],
  "kosovo": ["Kosovo"],
  "turkey": ["Turkey", "Türkiye"],
  "vatican-city": ["Vatican", "Holy See"],
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
const worldMap = document.getElementById("world-map");
const zoomLevel = document.getElementById("zoom-level");
const INITIAL_MAP_VIEW = { x: 0, y: 0, width: 1800, height: 900 };
const MAX_MAP_ZOOM = 8;

let timeRemaining = TOTAL_TIME;
let timerId = null;
let gameFinished = false;
let mapView = { ...INITIAL_MAP_VIEW };
let mapDrag = null;
let mapWasDragged = false;

function projectPoint([longitude, latitude]) {
  return [
    ((longitude + 180) / 360) * 1800,
    ((90 - latitude) / 180) * 900,
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

function updateMapView() {
  worldMap.setAttribute(
    "viewBox",
    `${mapView.x} ${mapView.y} ${mapView.width} ${mapView.height}`
  );
  zoomLevel.value = `${Math.round(INITIAL_MAP_VIEW.width / mapView.width * 100)}%`;
}

function setMapView(x, y, width, height) {
  mapView = {
    x: Math.max(0, Math.min(INITIAL_MAP_VIEW.width - width, x)),
    y: Math.max(0, Math.min(INITIAL_MAP_VIEW.height - height, y)),
    width,
    height,
  };
  updateMapView();
}

function zoomMap(factor, clientX, clientY) {
  const rect = worldMap.getBoundingClientRect();
  const anchorX = clientX === undefined
    ? mapView.x + mapView.width / 2
    : mapView.x + (clientX - rect.left) / rect.width * mapView.width;
  const anchorY = clientY === undefined
    ? mapView.y + mapView.height / 2
    : mapView.y + (clientY - rect.top) / rect.height * mapView.height;
  const nextWidth = Math.max(
    INITIAL_MAP_VIEW.width / MAX_MAP_ZOOM,
    Math.min(INITIAL_MAP_VIEW.width, mapView.width * factor)
  );
  const nextHeight = nextWidth / INITIAL_MAP_VIEW.width * INITIAL_MAP_VIEW.height;
  const anchorRatioX = (anchorX - mapView.x) / mapView.width;
  const anchorRatioY = (anchorY - mapView.y) / mapView.height;

  setMapView(
    anchorX - anchorRatioX * nextWidth,
    anchorY - anchorRatioY * nextHeight,
    nextWidth,
    nextHeight
  );
}

function panMap(deltaX, deltaY) {
  const rect = worldMap.getBoundingClientRect();
  setMapView(
    mapView.x - deltaX / rect.width * mapView.width,
    mapView.y - deltaY / rect.height * mapView.height,
    mapView.width,
    mapView.height
  );
}

function resetMapView() {
  setMapView(
    INITIAL_MAP_VIEW.x,
    INITIAL_MAP_VIEW.y,
    INITIAL_MAP_VIEW.width,
    INITIAL_MAP_VIEW.height
  );
}

function handleMapWheel(event) {
  event.preventDefault();
  zoomMap(event.deltaY < 0 ? 1 / 1.15 : 1.15, event.clientX, event.clientY);
}

function handleMapPointerDown(event) {
  if (event.button !== 0) return;
  mapDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    lastY: event.clientY,
    moved: false,
  };
  worldMap.classList.add("dragging");
  worldMap.setPointerCapture(event.pointerId);
}

function handleMapPointerMove(event) {
  if (!mapDrag || mapDrag.pointerId !== event.pointerId) return;

  if (Math.hypot(event.clientX - mapDrag.startX, event.clientY - mapDrag.startY) > 3) {
    mapDrag.moved = true;
  }
  if (mapDrag.moved) {
    panMap(event.clientX - mapDrag.lastX, event.clientY - mapDrag.lastY);
  }
  mapDrag.lastX = event.clientX;
  mapDrag.lastY = event.clientY;
}

function handleMapPointerUp(event) {
  if (!mapDrag || mapDrag.pointerId !== event.pointerId) return;
  mapWasDragged = event.type === "pointerup" && mapDrag.moved;
  if (worldMap.hasPointerCapture(event.pointerId)) {
    worldMap.releasePointerCapture(event.pointerId);
  }
  mapDrag = null;
  worldMap.classList.remove("dragging");
}

function handleMapClick(event) {
  if (mapWasDragged) {
    event.preventDefault();
    event.stopPropagation();
    mapWasDragged = false;
  }
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

worldMap.addEventListener("wheel", handleMapWheel, { passive: false });
worldMap.addEventListener("pointerdown", handleMapPointerDown);
worldMap.addEventListener("pointermove", handleMapPointerMove);
worldMap.addEventListener("pointerup", handleMapPointerUp);
worldMap.addEventListener("pointercancel", handleMapPointerUp);
worldMap.addEventListener("click", handleMapClick, true);
document.getElementById("zoom-in-btn").addEventListener("click", () => zoomMap(1 / 1.5));
document.getElementById("zoom-out-btn").addEventListener("click", () => zoomMap(1.5));
document.getElementById("zoom-reset-btn").addEventListener("click", resetMapView);
updateMapView();

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
