import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import withMenu from "../../../../HOC/withMenu";
import LanguageIcon from "@mui/icons-material/Language";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfileLanguage = () => {
  return (
    <LanguageIcon
      alt="Remy Sharp"
      src="/static/images/avatar/2.jpg"
      className="pointer icons-style"
    />
  );
};

const ProfileLanguageWithMenu = withMenu(ProfileLanguage, settings);

export default ProfileLanguageWithMenu;
