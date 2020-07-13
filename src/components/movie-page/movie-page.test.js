import MoviePage from "@components/movie-page/movie-page";

const movie = {
  id: 1,
  title: `Macbeth`,
  genres: [`Documentary`, `Kids & Family`, `Romance`],
  releaseDate: 2015,
  runTime: 123,
  cover: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  image: `img/macbeth.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: {
    score: 6.6,
    level: `Average`,
    count: 120,
  },
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will
    become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king
    and takes the throne for himself.`,
  director: `Justin Kurzel`,
  cast: `Michael Fassbender, Marion Cotillard, Jack Madigan`,
  reviews: [
    {
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2016-12-24`,
      rating: 8.7,
    },
    {
      author: `Bill Goodykoontz`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
        I wish I could take back.`,
      date: `2015-11-18`,
      rating: 5.3,
    },
  ],
};

it(`should render MoviePage`, () => {
  const tree = renderer.create(
      <MoviePage
        movie={movie}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
