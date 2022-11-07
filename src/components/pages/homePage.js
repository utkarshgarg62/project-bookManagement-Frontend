import { NavLink } from "react-router-dom";
import "./homePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="header-content">
        <div className="header-text">
          <h1>
            There is No Friend As
            <span> Loyal </span> as a <span>Book.</span>
          </h1>
          <br></br>
          <p>
            Buying books would be a good thing if one could also buy the time to
            read them in: but as a rule the purchase of books is mistaken for
            the appropriation of their contents.
            <br></br>
            <br></br>- Arthur Schopenhauer
          </p>
          <NavLink to="/bookslist" className="header-btn">
            Purchase
          </NavLink>
        </div>
        <div className="header-img">
          <img src="cover-img.png" alt="cover" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
