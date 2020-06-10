import React from 'react';
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, movieGenre, movieYear} = props;

  return <Main
    title={movieTitle}
    genre={movieGenre}
    year={movieYear}
  />;
};

export default App;
