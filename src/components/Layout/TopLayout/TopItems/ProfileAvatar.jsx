import { Avatar } from "@mui/material";
import withMenu from "../../../../HOC/withMenu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfileAvatar = () => {
  return <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />;
};

const ProfileAvatarWithMenu = withMenu(ProfileAvatar, settings);

export default ProfileAvatarWithMenu;
