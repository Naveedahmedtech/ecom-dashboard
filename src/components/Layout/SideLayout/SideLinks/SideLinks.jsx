import Logo from "../Logo/Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
          <NavLink to="/" className="links n-font c-white flex align-items-center ">
            <Accordion
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DashboardIcon className=" mr-1 c-white m-font" />
                <span className="c-white">Dashboard</span>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="c-white">List</Typography>
              </AccordionDetails>
            </Accordion>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center ">
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
                  <ExpandMoreIcon
                    sx={{ flexGrow: "grow" }}
                    className="c-white"
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <GroupIcon className=" mr-1 c-white m-font" />
                <div className="grow"></div>
                <span className="c-white">Customers</span>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="c-white">List</Typography>
              </AccordionDetails>
            </Accordion>
          </NavLink>
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
            </AccordionDetails>
          </Accordion>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center ">
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ backgroundColor: "transparent" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="c-white" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ShoppingCartIcon className=" mr-1 c-white m-font" />
                <span className="c-white mr-1">Orders</span>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="c-white">List</Typography>
              </AccordionDetails>
            </Accordion>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center ">
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ backgroundColor: "transparent" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="c-white" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <ReceiptIcon className=" mr-1 c-white m-font" />
                <span className="c-white mr-1">Invoices</span>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="c-white">List</Typography>
              </AccordionDetails>
            </Accordion>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default SideLinks;

// <div>
//   <NavLink className="links n-font c-white flex align-items-center">
//     <DashboardIcon className=" mr-1 m-font" />
//     <span>Dashboard</span>
//   </NavLink>
// </div>
// <div className=" mt-4">
//   <NavLink className="links n-font c-white flex align-items-center">
//     <GroupIcon className=" mr-1 m-font" />
//     <span>Customers</span>
//     <div className="grow"></div>
//     <ChevronRightIcon className="m-font" />
//   </NavLink>
// </div>
// <div className=" mt-4">
//   <NavLink className="links n-font c-white flex align-items-center">
//     <LocalMallIcon className=" mr-1 m-font" />
//     <span>Products</span>
//     <div className="grow"></div>
//     <ChevronRightIcon className="m-font" />
//   </NavLink>
// </div>
// <div className=" mt-4">
//   <NavLink className="links n-font c-white flex align-items-center">
//     <ShoppingCartIcon className=" mr-1 m-font" />
//     <span>Orders</span>
//     <div className="grow"></div>
//     <ChevronRightIcon className="m-font" />
//   </NavLink>
// </div>
// <div className=" mt-4">
//   <NavLink className="links n-font c-white flex align-items-center ">
//     <ReceiptIcon className=" mr-1 m-font" />
//     <span>Invoices</span>
//     <div className="grow"></div>
//     <ChevronRightIcon className="m-font" />
//   </NavLink>
// </div>
