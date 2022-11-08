import "./resHeader.css"
import { NavLink } from "react-router-dom";
const ResHeader = () => {
    return <div>
        <nav>
            <input id="nav-toggle" type="checkbox" />
            <div className="logo">
                <NavLink to="/" className="Nav-Logo">
                    BOOK MANAGEMENT
                </NavLink>
            </div>
            <ul className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bookslist">Books</NavLink>
                <NavLink to="/author">Authors</NavLink>
                <NavLink to="/login">Login</NavLink>
                <a href="https://utkarshhgarg.netlify.app/">About Me</a>
            </ul>
            <label for="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    </div>
}

export default ResHeader