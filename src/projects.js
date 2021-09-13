export const projects = [
  {
    name: "Idea-to-Ipo",
    github: [],
    prod: "",
    skills: ["NextJs", "NodeJS", "Express", "MongoDB"],
    gist: "A complete listing platform for startups and companies. All the information about different startups. A concept similar to angel.co.",
    description: [
      "A complete listing platform for startups and companies. It provides information about more than 10,000 companies (as of now) to the public giving them a greater reach and valuable information about them to investors and talents.",
      "Created the whole database from scratch by scraping data from various sources using puppeteer and structuring the raw data into a proper schema.",
      "Made the frontend in NextJS to provide SSR in order to benefit SEO and google rankings. Applied authentication and routing on both server and client-side. Includes Role-based access control for different user roles.",
      "The project is in the testing phase and will soon be deployed into production.",
    ],
  },
  {
    name: "What to watch today",
    github: ["https://github.com/atul-gairola/what-to-watch-today"],
    prod: "https://atul-gairola.github.io/what-to-watch-today/",
    skills: ["ReactJS", "Firebase"],
    gist: "Know the feeling of scrolling through OTT platforms everday for 30-40 mins just to choose the same old show to watch. This application is like a movie or show roulette, let it choose what you should watch today and make movie nights more exciting.",
    description: [
      "A fun web app which decides a movie or a tv for the user to watch to save them the trouble of deciding what to watch everyday. User can set some filters or leave it completely random.",
      "Consumes TMDB API to get data about movies and tv shows.",
      "Designed and developed a fully responsive user-friendly UI considering the ease of use to the end-user.",
      "Uses firebase for database and authentication.",
    ],
  },
  {
    name: "LinkedIn CRM",
    github: [
      "https://github.com/atul-gairola/LinkedIn-crm-extension",
      "https://github.com/atul-gairola/LinkedIn-crm-backend-",
    ],
    prod: "",
    skills: ["ReactJs", "NodeJS", "Express", "MongoDB"],
    gist: "A chromium extension which acts as a dashboard for your Linkedin connections. Get a clean tabular UI showing all your connections, send them messages from the dashboard, add tags to them, disconnect old connections and much more.",
    description: [
      "This is a complete clone of LeadDelta chrome extension which is basically a LinkedIn Dashbords to access your network easily. Send mulitple messages, add tags, download connections data.",
      "Consumes TMDB API to get data about movies and tv shows.",
      "Designed and developed a fully responsive user-friendly UI considering the ease of use to the end-user.",
      "Uses firebase for database and authentication.",
    ],
  },
  {
    name: "2-Bound",
    github: [],
    prod: "https://chrome.google.com/webstore/detail/2bound/bioaogffmfdlaecggogedaopceibjklj",
    skills: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    gist: "This extension is for facebook group admins. They can collect the data of their member requests, see it in a dashboard, even export it as a csv.",
    description: [
      "Chromium extension for facebook group admins. Admins can collect data about their member requests and even analyse that data to convert members into clients.",
      "Server in NodeJS using an express framework with authentication, RBAC, and routing.",
      "Created an admin panel for project admins to have an easy access to project and user data.",
    ],
  },
  {
    name: "Covid India Dashboard",
    github: ["https://github.com/atul-gairola/covid-19-india-dashboard"],
    prod: "https://atul-gairola.github.io/covid-19-india-dashboard/",
    skills: ["ReactJS", "RestAPI"],
    gist: "React dashboard showing covid stats in India and all of its states. The data is consumed through a public REST API and then managed across the application.",
    description: [
      "React dashboard showing covid stats in India and all of its states. The data is consumed through a public REST API and then managed across the application.",
      "Made the UI responsive for all device sizes.",
    ],
  },
];
