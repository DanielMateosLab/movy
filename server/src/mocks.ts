const mocks = {
  Query: () => ({
    showsByTitle: () => ({
      result: [...new Array(10)],
    }),
  }),
  Show: () => ({
    id: () => "tt0076759",
    poster: () =>
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    title: () => "Star Wars: Episode IV - A New Hope",
    type: () => "movie",
    year: () => "1977",
  }),
};

export default mocks;
