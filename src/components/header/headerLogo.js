import "./headerLogo.css";
const HeaderLogo = () => {
  return (
    <header>
      {/* <a href="/">Logo</a> */}
      <div className="logo-holder logo-7">
        <a href="/">
          <i className="fas fa-book-open"></i>
          <div className="left">
            <h3>Books Management</h3>
          </div>
        </a>
      </div>
    </header>
  );
};
export default HeaderLogo;
