import Logo from "@components/logo/logo";


it(`should render LogoComponent`, () => {
  const tree = renderer.create(
      <Logo
        isLight={true}
        isLinkActive={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
