const GenreList = (props) => {
  const {genres, activeGenre, onGenreChange} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={`${genre}-${index}`}
          className={`catalog__genres-item ${(genre === activeGenre) ? `catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreChange(genre);
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};


export default GenreList;
