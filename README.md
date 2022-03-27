# MOVY

A service to get the details of your favourite apps. See the live version [here](https://movy-ashen.vercel.app/)!

## Architecture

- Server API: an Apollo Server that uses different data sources to serve the client requests. You can find it in the `server/` folder.

  - Data sources:
    - OMDB Open REST API: external service to search for movies and movie details.
    - Apollo In-Memory LRU or Redis Cache: caching service to save unnecesary calls to OMDB API source.

- Client App: a NextJS & React app that consumes a graphQL API with Apollo Client. Ideally it will be served from a CDN in production. It is in the `client/` folder.
  - Features:
    - Search shows by title and type. Searches are tracked with the url query parameters, allowing you to go back and forth using the browser history and to share or save searches using the url.
    - See show details: if you click in a show you will be redirected to a page with more details
      of the given show.

## Developer Set Up Instructions

### Server

- To run a local instance of the server you need to provide a `OMDb_API_KEY` environment variable (EV) in a .env file, as shown in the .env.example file. This is needed to access the OMDb API. If you don't have one, you can get it [here](https://www.omdbapi.com/apikey.aspx).
- Open a terminal in the `server/` directory and run `npm install`.
- Start the server with `npm run dev`.
  - This will use the default Apollo in-memory LRU cache. If you want to use a redis cache, you must provide a `REDIS_URL` EV pointing to a redis running instance. If you have docker installed just use the `REDIS_URL` provided in `.env.example` and run `npm run dev:redis`.
- Ready to go! Some sidenotes:

  - There are integration tests written using jest in the `src/__test__` folder. You can run `npm test` to have a look at them. All tests are integration tests that mock OMDb API responses with real ones to avoid calling the external API on each test.
  - I used `@graphql-codegen` to generate types out of the schema. You can re-generate them
    with `npm run codegen`. When using `dev*` scripts, they are re-generated whenever the schema file
    is changed.

### Client

- You need to provide a server uri environment variable as shown in `.env.example`. The options to set up the server are:
  - With docker installed and an OMDb_API_KEY set in `server/.env`, run `docker-compose up -d server redis`. This will expose the server to http://localhost:4000.
  - Set up a server as shown above.
  - Use the live example server running in https://movy-server.herokuapp.com/
  - Change to client directory and run `npm run dev`

## Suggested Deploy Instructions

### Server - Heroku CLI

Assuming you have installed heroku CLI and you are logged in:

- Create a heroku app with `heroku create -a <your-app-name>`
- From the root folder, use `git subtree push --prefix server heroku main`. This will push just the server folder as an isolated app to the heroku remote.
- Set the `OMDb_API_KEY` environment variable.
- Optionally, to use a redis cache, run `heroku addons:create heroku-redis:hobby-dev -a <your-app-name>`. This should set up the redis instance and update the `REDIS_URL` EV for you.

### Client - Vercel

- Using vercel, just create a new project and set the client folder as the entry point.

## TODO

- Add integration tests for the client.
