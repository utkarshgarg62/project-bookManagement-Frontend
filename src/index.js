import React from "react";
import ReactDOM from "react-dom/client";

import MainHeader from "./components/header/mainHeader";
import HomePage from "./components/pages/homePage";
import BooksList from "./components/pages/booksList";
import AuthorList from "./components/pages/authorList";
import AuthorLogin from "./components/pages/authorLogin";
import NewAccount from "./components/pages/newAccount";
import CreateBooks from "./components/pages/createBooks";
import ErrPage from "./components/pages/errPage";
import ViewBook from "./components/pages/viewBook";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<HomePage />}></Route>
          <Route path="author" element={<AuthorList />}></Route>
          <Route path="login" element={<AuthorLogin />}></Route>
          <Route path="new-account" element={<NewAccount />}></Route>
          <Route path="new-book" element={<CreateBooks />}></Route>
          <Route path="bookslist" element={<BooksList />}></Route>
          <Route path="books/:id" element={<ViewBook />}></Route>
        </Route>
        <Route path="*" element={<ErrPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
