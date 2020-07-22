import SignIn from "@components/sign-in/sign-in";


it(`should render SignInComponent`, () => {
  const tree = renderer.create(
      <SignIn
        login={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
