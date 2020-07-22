import {AuthorizationStatus} from "../../reducer/user/user";
import Logo from "@components/logo/logo";
import {AppRoute} from "../../constants";
import {Link} from "react-router-dom";


const Header = (props) => {
  const _isAuthorized = (AuthorizationStatus.AUTH === props.authorizationStatus);

  return (
    <>
      <header className="page-header movie-card__head">
        <Logo isLight={false} isLinkActive={false}/>
        <div className="user-block">
          {_isAuthorized &&
            <Link to={AppRoute.MYLIST}>
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </Link>
          }
          {
            !_isAuthorized &&
              <Link
                to={AppRoute.LOGIN}
                className="user-block__link"
              >Sign in</Link>
          }
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


export default Header;
