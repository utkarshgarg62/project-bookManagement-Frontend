import "./header.css";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./headerLogo";
const Header = () => {
  return (
    <header>
      {/* <a href="/">Logo</a> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <HeaderLogo />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bookslist">Books</NavLink>
          </li>
          <li>
            <NavLink to="/author">Authors</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <a href="https://utkarshhgarg.netlify.app/">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
