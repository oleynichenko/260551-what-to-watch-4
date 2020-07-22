import {AuthorizationStatus} from "../../reducer/user/user";
import Logo from "@components/logo/logo";


const Header = (props) => {
  const _isAuthorized = (AuthorizationStatus.AUTH === props.authorizationStatus);

  return (
    <>
      <header className="page-header movie-card__head">
        <Logo isLight={false} isLinkActive={false}/>
        <div className="user-block">
          {_isAuthorized &&
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          }
          {
            !_isAuthorized &&
              <a href="sign-in" className="user-block__link">Sign in</a>
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
