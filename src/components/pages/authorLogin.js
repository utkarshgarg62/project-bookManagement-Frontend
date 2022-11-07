import "./authorLogin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthorLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [response, setResponse] = useState("")
  const [isError, setIsError] = useState("")

  const handle = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("https://book-management-backend.herokuapp.com/login", {
        email: email,
        password: password
      })
      setTimeout(function () {
        navigate("/new-book", { replace: true });
      }, 3000);
      console.log(resp.data)
      setResponse("Success")
      // let token = resp.data.data.token
      // resp.cookie("jwt-token", token);
    }
    catch (err) {
      console.log(err.response.data)
      setIsError(err.response.data.message)
    }
  }

  return (
    <div>
      <div className="header-content">
        <div className="header-text">
          <h1>
            <span>Log</span>in
          </h1>
          <br></br>
          <p>
            <form method="POST" onSubmit={handle} >
              {isError !== "" &&
                <div className="alert">
                  <strong>{isError}</strong>
                </div>
              }
              {response !== "" &&
                <div className="success">
                  <strong>{response} .... wait a while</strong>
                </div>
              }
              <br></br>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                id="email"
                name="email"
                className="email"
                placeholder="Enter your email"
              />
              <br></br>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                value={password}
                id="password"
                name="password"
                className="password"
                placeholder="Enter your password"
              />
              <br></br>

              <input type="submit" class="header-btn" />
            </form>
          </p>
          <br></br>
          <span>
            <NavLink to="/new-account">create account</NavLink>
          </span>
        </div>
        <div className="header-img">
          <img src="cover-img.png" alt="cover" />
        </div>
      </div>
    </div>
  );
};
export default AuthorLogin;
