import Header from './header';


it(`Header should match snapshot`, () => {
  const tree = renderer
    .create(
        <Header
          authorizationStatus={`AUTH`}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
