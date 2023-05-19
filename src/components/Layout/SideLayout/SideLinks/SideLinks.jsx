import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";

const SideLinks = () => {
  return (
    <>
      <Logo />
      {/* links */}
      <nav className="mt-5 flex flex-column justify-center ">
        <div>
          <NavLink className="links n-font c-white flex align-items-center">
            <DashboardIcon className=" mr-1 m-font" />
            <span>Dashboard</span>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center">
            <GroupIcon className=" mr-1 m-font" />
            <span>Customers</span>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center">
            <LocalMallIcon className=" mr-1 m-font" />
            <span>Products</span>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center">
            <ShoppingCartIcon className=" mr-1 m-font" />
            <span>Orders</span>
          </NavLink>
        </div>
        <div className=" mt-4">
          <NavLink className="links n-font c-white flex align-items-center ">
            <ReceiptIcon className=" mr-1 m-font" />
            <span>Invoices</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default SideLinks;
