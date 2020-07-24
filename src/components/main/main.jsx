import MoviesList from "@components/movie-list/movie-list.connect";
import GenreList from "@components/genre-list/genre-list.connect";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {shortMovieType} from "../../types";
import Header from "@components/header/header.connect";
import Footer from "@components/footer/footer";

const MoviesListWrapped = withActiveItem(MoviesList);

const Main = (props) => {
  const {
    titleMovie,
    isShowMore,
    onShowMoreClick,
    location
  } = props;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={titleMovie.cover} alt={titleMovie.title}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header headerClass={`movie-card__head`} pathname={location.pathname}/>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={titleMovie.poster}
              alt={titleMovie.title}
              width="218"
              height="327"
            />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{titleMovie.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{titleMovie.genres}</span>
              <span className="movie-card__year">{titleMovie.releaseDate}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList />
        <MoviesListWrapped />
        {isShowMore &&
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={onShowMoreClick}
            >Show more
            </button>
          </div>
        }
      </section>
      <Footer />
    </div>
  </>;
};

Main.propTypes = {
  titleMovie: shortMovieType,
  isShowMore: PropTypes.bool.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default Main;
