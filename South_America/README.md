# South America Countries Quiz

A standalone timed map quiz for the 12 sovereign countries of South America. Open `index.html` in a browser to play.

## Included countries

Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela

## Template notes

- `SouthAmericaQuiz.js` contains the country list, aliases, timer, score, and game behavior.
- Each SVG map region has an ID in the form `country-<country-id>`.
- To create another continent, replace the `COUNTRIES` data and SVG regions while keeping the game state and rendering functions.
- The map loads Natural Earth 1:50m country boundaries from its public GeoJSON repository and projects them into the SVG at runtime. The source data is public domain; verify current attribution and redistribution requirements before publishing.
- The map uses a blue ocean, neutral context geography, and interactive quiz-country regions. The app needs internet access on first load to retrieve the boundary data.