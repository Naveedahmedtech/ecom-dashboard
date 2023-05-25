import TopItems from "./TopItems/TopItems";
import { Outlet } from "react-router-dom";
import SideLinks from "../SideLayout/SideLinks/SideLinks";
import { AppBar } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const TopLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const handleOpenNav = () => {
    setIsOpen(true);
  };
  const handleCloseNav = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <TopItems handleOpenNav={handleOpenNav} />
      <main className="wrap-pd ">
        <Outlet />
      </main>
      <header
        className={isOpen && "bg-side"}
        onClick={isOpen && handleClickOutside}
      >
        <AppBar
          id={isOpen && "res-side-nav"}
          className="side-nav"
          color="secondary"
          ref={sideNavRef}
        >
          <SideLinks handleCloseNav={handleCloseNav} />
        </AppBar>
      </header>
    </>
  );
};

export default TopLayout;
