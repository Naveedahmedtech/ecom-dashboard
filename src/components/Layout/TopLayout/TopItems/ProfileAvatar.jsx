import { Avatar } from "@mui/material";
import withMenu from "../../../../HOC/withMenu";
import profilePic from "./profilePic.png";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfileAvatar = () => {
  return <Avatar alt="Remy Sharp" src={profilePic} />;
};

const ProfileAvatarWithMenu = withMenu(ProfileAvatar, settings);

export default ProfileAvatarWithMenu;
