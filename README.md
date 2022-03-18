# MOVY

A service to get the details of your favourite apps.

## Architecture

- Client App: a React app that consumes a graphQL API with Apollo Client. It is in the `client/` folder.
- Server API: an Apollo Server that uses different data sources to serve the client requests. You can find it in the `server/` folder.
  Implements a Redis cache to avoid repeating searches to OMDB API (TODO).
- Data sources:
  - OMDB Open REST API: external service to search for movies and movie details.
  - Redis Cache: caching service to save unnecesary calls to OMDB API source.

## DEVELOPER SET UP INSTRUCTIONS

### Server

- To run a local instance of the server you need to provide a `OMDb_API_KEY` environment variable as shown in the .env.example file.
- Open a terminal in the `server/` directory and run `npm install && npm run dev`.
- There are integration tests written using jest in the `src/__test__` folder. You can run `npm test` to have a look at them. All tests are integration tests that mock OMDb API responses with real ones to avoid calling the external API on each test.
- I used `@graphql-codegen` to generate types out of the schema. You can re-generate them
  with `npm run codegen`. When using the `dev` script, they are re-generated whenever the schema file
  is changed.

## TODO

- Implement the server-side redis cache.
- Create the client app.
