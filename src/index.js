import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

ReactDOM.render(
    <App
      movieTitle={movie.title}
      movieGenre={movie.genre}
      movieYear={movie.year}
    />,
    document.querySelector(`#root`)
);
