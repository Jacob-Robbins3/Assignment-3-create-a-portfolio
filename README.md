How to get it running
Unzip the file and open the folder in your terminal or VS Code.

Type npm install to get all the dependencies.

Type npm run dev to start the local server.

Click the link in the terminal (usually http://localhost:5173) to see the site.

My Routes and Pages
I used react-router-dom to make the site feel like a single-page app. Everything is wrapped in a RootLayout so the navbar stays at the top.

Home (/): A quick bio about me and a list of my tech and math skills.

Projects (/projects): Cards showing my Pet Adoption site and my Terraria Encyclopedia project.

Experience (/experience): A list of my leadership roles in landscaping and natural resources, plus my volunteer work.

Contact (/contact): My email and links to my LinkedIn and GitHub.

The Quote Widget
I put the Quote Widget on the Experience page to give it some extra inspiration.

How it works: It uses fetch to get a random quote from the DummyJSON API.

Implementation: I used useEffect to grab a quote as soon as the page loads. I also used useState to keep track of the quote data and show a "Loading..." message while the API is thinking.

Refresh: There is an "Inspire Me" button that calls the API again so you can get a new quote without refreshing the whole page.

Styling
I brought over the styles.css file from our first assignment. I put it in src/styles/styles.css and imported it into main.jsx. I used the .card, .btn, and .chip classes to keep the dark theme looking consistent across the whole site.