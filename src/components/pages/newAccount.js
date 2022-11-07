import "./authorLogin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthorLogin = () => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState("")
  const [cover, setCover] = useState("")
  const [response, setResponse] = useState("")
  const [isError, setIsError] = useState("")

  const handle = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("https://book-management-backend.herokuapp.com/register", {
        title: title,
        name: name,
        phone: phone,
        email: email,
        password: password,
        address: {
          street: street,
          city: city,
          pincode: pincode
        },
        cover: cover
      })
      setTimeout(function () {
        navigate("/login", { replace: true });
      }, 3000);
      console.log(resp.data)
      setResponse("Success")
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
            <span>create</span> account
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
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                id="title"
                name="title"
                className="title"
                placeholder="Enter Title - Mr / Mrs"
              />
              <br></br>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                id="name"
                name="name"
                className="name"
                placeholder="Enter Your Name"
              />
              <br></br>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                value={phone}
                id="phone"
                name="phone"
                className="phone"
                placeholder="Enter Phone Number"
              />
              <br></br>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                id="email"
                name="email"
                className="email"
                placeholder="Enter your Email"
              />
              <br></br>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                value={password}
                id="password"
                name="password"
                className="password"
                placeholder="Enter your Password"
              />


              <br></br>
              <input
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                id="street"
                name="street"
                className="street"
                placeholder="Enter your Street"
              />
              <br></br>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                id="city"
                name="city"
                className="city"
                placeholder="Enter your City"
              />
              <br></br>
              <input
                type="text"
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
                id="pincode"
                name="pincode"
                className="pincode"
                placeholder="Enter your Pincode"
              />

              <br></br>
              <input
                onChange={(e) => setCover(e.target.value)}
                type="text"
                value={cover}
                id="cover"
                name="cover"
                className="cover"
                placeholder="Enter profile image link"
              />

              <input type="submit" class="header-btn" />
            </form>
          </p>
          <br></br>
          <span>
            <NavLink to="/login">Login</NavLink>
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
