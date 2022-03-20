# MOVY

A service to get the details of your favourite apps.

## Architecture

- Client App: a React app that consumes a graphQL API with Apollo Client. It is in the `client/` folder.
- Server API: an Apollo Server that uses different data sources to serve the client requests. You can find it in the `server/` folder.
- Data sources:
  - OMDB Open REST API: external service to search for movies and movie details.
  - Apollo In-Memory LRU or Redis Cache: caching service to save unnecesary calls to OMDB API source.

## Developer Set Up Instructions

### Server

- To run a local instance of the server you need to provide a `OMDb_API_KEY` environment variable (EV) as shown in the .env.example file. This is needed to access the OMDb API. If you don't have one, you can get it [here](https://www.omdbapi.com/apikey.aspx).
- Open a terminal in the `server/` directory and run `npm install && npm run dev`.
  - This will use the default Apollo in-memory LRU cache. If you want to use a redis cache, you must provide a `REDIS_URL` EV pointing to a redis running instance. If you have docker installed just use the `REDIS_URL` provided in `.env.example` and run `npm run dev:redis`.
- There are integration tests written using jest in the `src/__test__` folder. You can run `npm test` to have a look at them. All tests are integration tests that mock OMDb API responses with real ones to avoid calling the external API on each test.
- I used `@graphql-codegen` to generate types out of the schema. You can re-generate them
  with `npm run codegen`. When using `dev*` scripts, they are re-generated whenever the schema file
  is changed.

## Suggested Deploy Instructions

### Server - Heroku CLI

Assuming you have installed heroku CLI and you are logged in:

- Create a heroku app with `heroku create -a <your-app-name>`
- From the root folder, use `git subtree push --prefix server heroku main`. This will push just the server folder as an isolated app to the heroku remote.
- Set the `OMDb_API_KEY` environment variable.
- Optionally, to use a redis cache, run `heroku addons:create heroku-redis:hobby-dev -a <your-app-name>`. This should set up the redis instance and update the `REDIS_URL` EV for you.

## TODO

- Create the client app.
