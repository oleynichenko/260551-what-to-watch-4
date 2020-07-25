import Header from './header';
import {BrowserRouter} from "react-router-dom";

const children = <div className="children-component" />;

it(`Header should match snapshot`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Header
          authorizationStatus={`AUTH`}
          headerClass={``}
          pathname={`/`}
        >
          {children}
        </Header>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
