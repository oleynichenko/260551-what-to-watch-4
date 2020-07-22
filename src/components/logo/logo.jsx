const Logo = (props) => {
  const {isLight, isLinkActive} = props;

  return (
    <div className="logo">
      <a
        className={`logo__link ${isLight ? `logo__link--light` : ``}`}
        {... isLinkActive ? {href: `/`} : {}}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool.isRequired,
  isLinkActive: PropTypes.bool.isRequired
};


export default Logo;
