import {AuthorizationStatus} from "../../reducer/user/user";
import Logo from "@components/logo/logo";
import {AppRoute} from "../../constants";
import {Link} from "react-router-dom";


const Header = (props) => {
  const {headerClass, authorizationStatus, pathname, children} = props;
  const _isAuthorized = (AuthorizationStatus.AUTH === authorizationStatus);
  const isMainPage = pathname === AppRoute.MAIN;

  return (
    <>
      <header className={`page-header ${headerClass}`}>
        <Logo isLight={false} isLinkActive={!isMainPage}/>
        {children}
        <div className="user-block">
          {_isAuthorized &&
            <Link to={AppRoute.MY_LIST}>
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
  headerClass: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};


export default Header;
