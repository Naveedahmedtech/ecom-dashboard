import React, { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";

const withMenu = (WrappedComponent, menuItems) => {
  return () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
              <WrappedComponent />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseMenu}>
                <Typography textAlign="center">{item}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  };
};

export default withMenu;
