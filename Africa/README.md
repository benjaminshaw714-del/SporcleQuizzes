# Africa Countries Quiz

A standalone timed map quiz for the 54 countries of Africa. Open `index.html` in a browser to play.

## Included countries

- Algeria
- Angola
- Benin
- Botswana
- Burkina Faso
- Burundi
- Cabo Verde
- Cameroon
- Central African Republic
- Chad
- Comoros
- Democratic Republic of the Congo
- Republic of the Congo
- Côte d'Ivoire
- Djibouti
- Egypt
- Equatorial Guinea
- Eritrea
- Eswatini
- Ethiopia
- Gabon
- Gambia
- Ghana
- Guinea
- Guinea-Bissau
- Kenya
- Lesotho
- Liberia
- Libya
- Madagascar
- Malawi
- Mali
- Mauritania
- Mauritius
- Morocco
- Mozambique
- Namibia
- Niger
- Nigeria
- Rwanda
- São Tomé and Príncipe
- Senegal
- Seychelles
- Sierra Leone
- Somalia
- South Africa
- South Sudan
- Sudan
- Tanzania
- Togo
- Tunisia
- Uganda
- Zambia
- Zimbabwe

## Template notes

- `AfricaQuiz.js` contains the country list, aliases, timer, score, and game behavior.
- Each SVG map region has an ID in the form `country-<country-id>`.
- To create another continent, replace the `COUNTRIES` data and SVG regions while keeping the game state and rendering functions.
- The map loads Natural Earth 1:50m country boundaries from its public GeoJSON repository and projects them into the SVG at runtime. The source data is public domain; verify current attribution and redistribution requirements before publishing.
- The map uses a blue ocean, neutral context geography, and interactive quiz-country regions. The app needs internet access on first load to retrieve the boundary data.