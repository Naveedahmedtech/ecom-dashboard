import Logo from "../Logo/Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideLinks = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Logo />
      {/* links */}
      <nav className="mt-5 flex flex-column justify-center ">
        <div className=" mt-4">
          <NavLink
            to="/"
            className="links n-font c-white flex align-items-center "
          >
            <div
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AccordionSummary>
                <DashboardIcon className=" mr-1 c-white m-font" />
                <span className="c-white">Dashboard</span>
              </AccordionSummary>
            </div>
          </NavLink>
        </div>
        <div className=" mt-4">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ flexGrow: "grow" }} className="c-white" />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <GroupIcon className=" mr-1 c-white m-font" />
                <span className="c-white">Customers</span>
            </AccordionSummary>
            <AccordionDetails>
              <NavLink
                to="customer/list"
                className="links n-font c-white flex align-items-center "
              >
                <Typography className="c-white">List</Typography>
              </NavLink>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className=" mt-4">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="c-white" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <LocalMallIcon className=" mr-1 c-white m-font" />
              <span className="c-white mr-1">Products</span>
            </AccordionSummary>
            <AccordionDetails>
              <NavLink
                to="products/list"
                className="links n-font c-white flex align-items-center "
              >
                <Typography className="c-white">List</Typography>
              </NavLink>
              <NavLink
                to="products/create"
                className="links n-font c-white flex align-items-center "
              >
                <Typography className="c-white mt-3">Create</Typography>
              </NavLink>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className=" mt-4">
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ flexGrow: "grow" }} className="c-white" />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <ShoppingCartIcon className=" mr-1 c-white m-font" />
              <span className="c-white">Orders</span>
            </AccordionSummary>
            <AccordionDetails>
              <NavLink
                to="orders/list"
                className="links n-font c-white flex align-items-center "
              >
                <Typography className="c-white">List</Typography>
              </NavLink>
            </AccordionDetails>
          </Accordion>
        </div>
      </nav>
    </>
  );
};

export default SideLinks;
