import "./authorLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AuthorLogin = () => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [userId, setUserId] = useState("")
  const [ISBN, setISBN] = useState("")
  const [category, setCategory] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [releasedAt, setReleasedAt] = useState("")
  const [cover, setCover] = useState("")
  const [response, setResponse] = useState("")
  const [isError, setIsError] = useState("")

  const handle = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("https://bm-backend-ug.herokuapp.com/books", {
        title: title,
        excerpt: excerpt,
        userId: userId,
        ISBN: ISBN,
        category: category,
        subcategory: subcategory,
        releasedAt: releasedAt,
        cover: cover
      })
      setTimeout(function () {
        navigate("/bookslist", { replace: true });
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
            <span>create</span> book
          </h1>
          <br></br>
          <p>
            <form method="POST" onSubmit={handle}>
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
                placeholder="Enter Title (Book Name)"
              />
              <br></br>
              <input
                onChange={(e) => setExcerpt(e.target.value)}
                type="text"
                value={excerpt}
                id="excerpt"
                name="excerpt"
                className="excerpt"
                placeholder="Enter Excerpt"
              />
              <br></br>
              <input
                onChange={(e) => setUserId(e.target.value)}
                type="text"
                value={userId}
                id="userId"
                name="userId"
                className="userId"
                placeholder="Enter UserId"
              />
              <br></br>
              <input
                onChange={(e) => setISBN(e.target.value)}
                type="text"
                value={ISBN}
                id="ISBN"
                name="ISBN"
                className="ISBN"
                placeholder="Enter ISBN"
              />
              <br></br>
              <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                value={category}
                id="category"
                name="category"
                className="category"
                placeholder="Enter Category"
              />

              <br></br>
              <input
                type="text"
                onChange={(e) => setSubcategory(e.target.value)}
                value={subcategory}
                id="subcategory"
                name="subcategory"
                className="subcategory"
                placeholder="Enter Subcategory"
              />
              <br></br>
              <input
                type="text"
                onChange={(e) => setReleasedAt(e.target.value)}
                value={releasedAt}
                id="releasedAt"
                name="releasedAt"
                className="releasedAt"
                placeholder="Enter ReleasedAt"
              />

              <br></br>
              <input
                onChange={(e) => setCover(e.target.value)}
                type="text"
                value={cover}
                id="cover"
                name="cover"
                className="cover"
                placeholder="Enter Book Cover link"
              />

              <input type="submit" class="header-btn" />
            </form>
          </p>
          <br></br>
          {/* <span>
            <NavLink to="/login">Login</NavLink>
          </span> */}
        </div>
        <div className="header-img">
          <img src="book2-img.png" alt="cover" />
        </div>
      </div>
    </div>
  );
};
export default AuthorLogin;
