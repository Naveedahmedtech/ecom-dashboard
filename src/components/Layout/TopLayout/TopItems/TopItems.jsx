import Menu from "./Menu";
import SearchField from "./SearchField";
import ProfileAvatarWithMenu from "./ProfileAvatar";
import ProfileContactWithMenu from "./ProfileContact";
import ProfileLanguageWithMenu from "./ProfileLanguage";
import ProfileNotificationWithMenu from "./ProfileNotification";
import "./styles.css";

const TopItems = ({ handleOpenNav }) => {
  return (
    <header className="topitems-header">
      <div className="pp">
        <main className="flex align-items-center justify-between">
          <div className="flex">
            <Menu
              handleOpenNav={handleOpenNav}
            />
            <SearchField />
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
