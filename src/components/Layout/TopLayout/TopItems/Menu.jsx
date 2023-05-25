import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Menu = ({ handleOpenNav }) => {

  return (
    <div>
      <MenuOpenIcon
        className="pointer icons-style menu"
        onClick={handleOpenNav}
      />
    </div>
  );
};

export default Menu;
