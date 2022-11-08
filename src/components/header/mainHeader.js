import { Outlet } from "react-router-dom";
import ResHeader from "./resHeader";

const HomePage = () => {
  return (
    <>
      <ResHeader />
      <Outlet />
    </>
  );
};

export default HomePage;
