import Main from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const movies = [
  {
    id: 1,
    title: `Macbeth`,
    genres: [`Documentary`, `Kids & Family`, `Romance`],
    releaseDate: 2015,
    runTime: `2h 0m`,
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
  },
  {
    id: 2,
    title: `We need to talk about Kevin`,
    genres: [`Drama`, `Horror`, `Crime`],
    releaseDate: 2011,
    runTime: `1h 40m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: {
      score: 7.5,
      level: `Good`,
      count: 134,
    },
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things
      he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond
      anything anyone imagined.`,
    director: `Lynne Ramsay`,
    cast: `Tilda Swinton, John C. Reilly, Ezra Miller`,
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
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genres: [`Drama`, `Thriller`, `Comedy`],
    releaseDate: 2018,
    runTime: `3h 5m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.6,
      level: `Average`,
      count: 300,
    },
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures
      of Magizoologist Newt Scamander.`,
    director: `David Yates`,
    cast: `Eddie Redmayne, Katherine Waterston, Dan Fogler`,
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
  },
];

describe(`MainComponent`, () => {
  it(`should render Main`, () => {
    const store = mockStore({
      DATA: {
        movies,
        titleMovie: movies[0]
      },
      MOVIES: {
        moviesLimit: 8,
        activeGenre: `All genres`,
      },
      USER: {
        authorizationStatus: `AUTH`,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Main
            titleMovie={movies[0]}
            isShowMore={true}
            onShowMoreClick={() => {}}
          />,
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
