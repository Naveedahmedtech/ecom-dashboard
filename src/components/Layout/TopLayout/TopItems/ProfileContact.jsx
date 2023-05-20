import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import withMenu from "../../../../HOC/withMenu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfileContact = () => {
  return (
    <PermContactCalendarIcon
      alt="Remy Sharp"
      src="/static/images/avatar/2.jpg"
      className="pointer icons-style"
    />
  );
};

const ProfileContactWithMenu = withMenu(ProfileContact, settings);

export default ProfileContactWithMenu;
