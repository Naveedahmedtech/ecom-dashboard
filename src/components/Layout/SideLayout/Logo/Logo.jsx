// mui components
import { AppBar, Typography } from "@mui/material";
// importing logo
import logo from "../../../../assets/images/logo/react.png";

const Logo = () => {
  return (
    <div className="flex align-items-center">
      <img src={logo} alt="logo" width={50} className="mr-1 pointer" />
      <Typography variant="h5">NAVEED</Typography>
    </div>
  );
};

export default Logo;
