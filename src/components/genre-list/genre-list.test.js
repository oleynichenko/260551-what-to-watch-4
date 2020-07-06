import {GenreList} from "@components/genre-list/genre-list";

const genres = [`Drama`, `Horror`, `Kids & Family`];

describe(`GenreListComponent`, () => {
  it(`should render GenreList`, () => {
    const tree = renderer.create(
        <GenreList
          genres={genres}
          activeGenre={`Horror`}
          onGenreChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
