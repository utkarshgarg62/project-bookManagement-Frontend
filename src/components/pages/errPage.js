import React from "react";
// import Header from "../header/header";
import { NavLink } from "react-router-dom";
import "./errPage.css";
const errPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <section>
        <h3>
          404! Page Not Found. Go Back to
          <NavLink to="/"> Home Page</NavLink>
        </h3>
        <div className="error">
          <img src="404.png" className="center" alt="404" />
        </div>
      </section>
    </div>
  );
};

export default errPage;
