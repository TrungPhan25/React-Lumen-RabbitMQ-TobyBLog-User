import { Link } from "react-router-dom";
import NavItem from "../../Head/NavItem";

function Header() {
  const link_facebook = process.env.REACT_APP_LINK_FACEBOOK;

  return (
    <header className="navigation">
      <div className="header-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <Link to={link_facebook} target="_blank">
                  <i className="ti-facebook"></i>
                </Link>
                {/* <a href="https://twitter.com/themefisher" target="_blank">
                  <i className="ti-twitter"></i>
                </a>
                <a href="https://github.com/themefisher/" target="_blank">
                  <i className="ti-github"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info">
                <a href="tel:+23-345-67890">
                  Call Us : <span>+12-123-123</span>
                </a>
                <a href="mailto:support@gmail.com">
                  <i className="fa fa-envelope mr-2"></i>
                  <span>pttrungvt@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  py-4" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Toby<span>Blog.</span>
          </Link>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarsExample09"
          >
            <ul className="navbar-nav ml-auto">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/blog">Blog</NavItem>
              <NavItem to="/contract">Contract</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
