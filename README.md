# MOVY

A service to get the details of your favourite apps.

## Architecture

- Client App: a React app that consumes a graphQL API with Apollo Client. It is in the `client/` folder.
- Server API: an Apollo Server that uses different data sources to serve the client requests. You can find it in the `server/` folder.
  Implements a Redis cache to avoid repeating searches to OMDB API.
- Data sources:
  - OMDB Open REST API: external service to search for movies and movie details.
  - Redis Cache: caching service to save unnecesary calls to OMDB API source.

## DEVELOPER SET UP

TODO
