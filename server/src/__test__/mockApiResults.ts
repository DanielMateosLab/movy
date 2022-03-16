// The error response has always the same shape
const errorMockResponse = {
  Error: "Movie not found!",
  Response: "False",
};

export const showsByTitleMockResponses = {
  Response: "True",
  Search: [
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman v Superman: Dawn of Justice",
      Type: "movie",
      Year: "2016",
      imdbID: "tt2975590",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      Title: "Batman",
      Type: "movie",
      Year: "1989",
      imdbID: "tt0096895",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      Title: "Batman Returns",
      Type: "movie",
      Year: "1992",
      imdbID: "tt0103776",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Title: "Batman Forever",
      Type: "movie",
      Year: "1995",
      imdbID: "tt0112462",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
      Title: "Batman & Robin",
      Type: "movie",
      Year: "1997",
      imdbID: "tt0118688",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
      Title: "The Batman",
      Type: "movie",
      Year: "2022",
      imdbID: "tt1877830",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
      Title: "The Lego Batman Movie",
      Type: "movie",
      Year: "2017",
      imdbID: "tt4116284",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Title: "Batman: Under the Red Hood",
      Type: "movie",
      Year: "2010",
      imdbID: "tt1569923",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Title: "Batman: The Killing Joke",
      Type: "movie",
      Year: "2016",
      imdbID: "tt4853102",
    },
  ],
  totalResults: "406",
};

export const showByIdMockResponse = {
  Response: "True",

  imdbID: "tt0372784",
  Type: "movie",
  Title: "Batman Begins",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Year: "2005",
  Genre: "Action, Crime, Drama",
  Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  Actors: "Christian Bale, Michael Caine, Ken Watanabe",
  Director: "Christopher Nolan",
  Writer: "Bob Kane, David S. Goyer, Christopher Nolan",
  Awards: "Nominated for 1 Oscar. 13 wins & 79 nominations total",

  BoxOffice: "$206,863,479",
  Country: "United States, United Kingdom",
  DVD: "18 Oct 2005",
  Language: "English, Mandarin",
  Metascore: "70",
  Production: "N/A",
  Rated: "PG-13",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.3/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "84%",
    },
    {
      Source: "Metacritic",
      Value: "70/100",
    },
  ],
  Released: "15 Jun 2005",
  Runtime: "140 min",
  Website: "N/A",
  imdbRating: "8.3",
  imdbVotes: "1,407,083",
};
