import { useEffect, useState } from "react";
import "./authorList.css";
import axios from "axios";


const authorApi = "https://bookmanagement-back.herokuapp.com/getUser";

const AuthorList = () => {
  const [authorList, setAuthorList] = useState();

  useEffect(() => {
    if (!authorList) {
      axios.get(authorApi).then((response) => {
        console.log(response.data.data);
        setAuthorList(response.data.data);
      });
    }
  });

  return (
    <div>
      <h1>Authors</h1>
      {authorList && authorList.length > 0 && (
        <div id="list-th">
          {authorList.map((authors) => (
            <div className="books">
              <div className="cover">
                <img src={authors.cover} alt="abc" />
              </div>
              <div className="description">
                <p className="title">
                  {authors.title}. {authors.name}
                  <br></br>
                  <span className="author">{authors.email}</span>
                  <span>
                    <button>{authors._id}</button>
                  </span>
                  {/* <br></br>
                  <span className="author-add">
                    {authors.address.street}, {authors.address.city},{" "}
                    {authors.address.pincode}
                  </span> */}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorList;
