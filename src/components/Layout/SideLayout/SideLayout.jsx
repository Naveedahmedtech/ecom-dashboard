import { Outlet } from "react-router-dom";
import SideLinks from "./SideLinks/SideLinks";
import { AppBar } from "@mui/material";

const SideLayout = () => {

  return (
    <>
      <header>
        <AppBar className="side-nav" color="secondary">
          <SideLinks />
        </AppBar>
        <main className="main-content">
          <Outlet />
        </main>
      </header>
    </>
  );
};

export default SideLayout;
