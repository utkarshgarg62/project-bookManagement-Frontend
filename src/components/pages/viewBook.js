import { useEffect, useState } from "react";
import "./viewBook.css";
import { NavLink, useParams } from "react-router-dom";

const ViewBook = () => {
  const { id } = useParams();
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetch(`https://book-management-backend.herokuapp.com/books/${id}`)
      .then((response) => response.json())
      .then((output) => {
        setBooksList(output.data);
      });
  });
  return (
    <div>
      <h1>BooksList</h1>
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={booksList.cover} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <br></br>
              <span>
                <strong>REVIEWS - {booksList.reviews} </strong>
              </span>
            </div>
            <div className="row">
              <h2>{booksList.title}</h2>
              <br></br>
              <br></br>
            </div>

            <p>
              <strong>ISBN - </strong> {booksList.ISBN}
            </p>
            <p>
              <strong>Excerpt - </strong> {booksList.excerpt}
            </p>
            <p>
              <strong>Category - </strong> {booksList.category}
            </p>
            <p>
              <strong>Subcategory - </strong> {booksList.subcategory}
            </p>
            <NavLink to="/" className="button-32">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
