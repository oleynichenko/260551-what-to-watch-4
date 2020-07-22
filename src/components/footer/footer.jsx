import Logo from "@components/logo/logo";


const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo isLight={true} isLinkActive={false}/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};


export default Footer;
