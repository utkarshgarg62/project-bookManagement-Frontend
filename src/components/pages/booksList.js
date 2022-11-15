import { useEffect, useState } from "react";
import "./booksList.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const booksApi = "https://bm-backend.up.railway.app/books";

const BooksList = () => {
  const [booksList, setBooksList] = useState();

  useEffect(() => {
    if (!booksList) {
      axios.get(booksApi).then((response) => {
        console.log(response.data.data);
        setBooksList(response.data.data);
      });
    }
  });

  return (
    <div>
      <h1>BooksList</h1>
      {booksList && booksList.length > 0 && (
        <div className="listbook-th" id="list-th">
          {booksList.map((books) => (
            <div className="book read">
              <div className="cover">
                <img src={books.cover} alt="abc" />
              </div>
              <div className="description">
                <p className="title">
                  {books.title}
                  <br></br>
                  <span className="author">{books.userId.name} </span>
                  {/* <br></br> */}
                  <span className="view-book">
                    <NavLink to={"/books/" + books._id} className="button-32">
                      View
                    </NavLink>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
