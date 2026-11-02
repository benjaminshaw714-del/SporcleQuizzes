# North America Countries Quiz

A standalone timed map quiz for the 51 sovereign countries of Europe, including transcontinental countries. Open `index.html` in a browser to play.

## Included countries

- Albania
- Andorra
- Armenia
- Austria
- Azerbaijan
- Belarus
- Belgium
- Bosnia and Herzegovina
- Bulgaria
- Croatia
- Cyprus
- Czechia
- Denmark
- Estonia
- Finland
- France
- Georgia
- Germany
- Greece
- Hungary
- Iceland
- Ireland
- Italy
- Kazakhstan
- Kosovo
- Latvia
- Liechtenstein
- Lithuania
- Luxembourg
- Malta
- Moldova
- Monaco
- Montenegro
- Netherlands
- North Macedonia
- Norway
- Poland
- Portugal
- Romania
- Russia
- San Marino
- Serbia
- Slovakia
- Slovenia
- Spain
- Sweden
- Switzerland
- Turkey
- Ukraine
- United Kingdom
- Vatican City

## Template notes

- `NorthAmericaQuiz.js` contains the country list, aliases, timer, score, and game behavior.
- Each SVG map region has an ID in the form `country-<country-id>`.
- To create another continent, replace the `COUNTRIES` data and SVG regions while keeping the game state and rendering functions.
- The map loads Natural Earth 1:50m country boundaries from its public GeoJSON repository and projects them into the SVG at runtime. The source data is public domain; verify current attribution and redistribution requirements before publishing.
- The map uses a blue ocean, neutral context geography, and interactive quiz-country regions. The app needs internet access on first load to retrieve the boundary data.