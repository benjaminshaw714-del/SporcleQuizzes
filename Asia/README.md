# Asia Countries Quiz

A standalone timed map quiz featuring 50 countries of Asia, including transcontinental countries. Open `index.html` in a browser to play.

## Included countries

- Afghanistan
- Armenia
- Azerbaijan
- Bahrain
- Bangladesh
- Bhutan
- Brunei
- Cambodia
- China
- Cyprus
- Georgia
- India
- Indonesia
- Iran
- Iraq
- Israel
- Japan
- Jordan
- Kazakhstan
- Kuwait
- Kyrgyzstan
- Laos
- Lebanon
- Malaysia
- Maldives
- Mongolia
- Myanmar
- Nepal
- North Korea
- Oman
- Pakistan
- Palestine
- Philippines
- Qatar
- Russia
- Saudi Arabia
- Singapore
- South Korea
- Sri Lanka
- Syria
- Taiwan
- Tajikistan
- Thailand
- Timor-Leste
- Turkey
- Turkmenistan
- United Arab Emirates
- Uzbekistan
- Vietnam
- Yemen

## Template notes

- `AsiaQuiz.js` contains the country list, aliases, timer, score, and game behavior.
- Each SVG map region has an ID in the form `country-<country-id>`.
- To create another continent, replace the `COUNTRIES` data and SVG regions while keeping the game state and rendering functions.
- The map loads Natural Earth 1:50m country boundaries from its public GeoJSON repository and projects them into the SVG at runtime. The source data is public domain; verify current attribution and redistribution requirements before publishing.
- The map uses a blue ocean, neutral context geography, and interactive quiz-country regions. The app needs internet access on first load to retrieve the boundary data.