import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProfileAvatarWithMenu from "./ProfileAvatar";
import ProfileContactWithMenu from "./ProfileContact";
import ProfileLanguageWithMenu from "./ProfileLanguage";
import ProfileNotificationWithMenu from "./ProfileNotification";
import "./styles.css";

const TopItems = () => {
  return (
    <header className="topitems-header">
      <div className="pp">
        <main className="flex align-items-center justify-between">
          <div>
            <SearchOutlinedIcon
              sx={{ color: "white" }}
              className="pointer lg-font"
            />
          </div>
          <div className="flex align-items-center">
            <ProfileLanguageWithMenu />
            <ProfileNotificationWithMenu />
            <ProfileContactWithMenu />
            <ProfileAvatarWithMenu />
          </div>
        </main>
      </div>
    </header>
  );
};

export default TopItems;
