import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import withMenu from "../../../../HOC/withMenu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfileNotification = () => {
  return (
    <CircleNotificationsIcon
      alt="Remy Sharp"
      src="/static/images/avatar/2.jpg"
      className="pointer icons-style"
    />
  );
};

const ProfileNotificationWithMenu = withMenu(ProfileNotification, settings);

export default ProfileNotificationWithMenu;
