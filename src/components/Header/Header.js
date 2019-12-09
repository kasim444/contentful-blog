import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      title="Back to home"
      className="brand"
    >
      Kasim ŞEN
        </Link>
    <div>
      <Link to="/about">
        About
        </Link>
      <Link to="/blog">
        Blog
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
