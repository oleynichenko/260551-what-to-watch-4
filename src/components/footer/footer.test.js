import Footer from "@components/footer/footer";

it(`should render FooterComponent`, () => {
  const tree = renderer.create(
      <Footer />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
