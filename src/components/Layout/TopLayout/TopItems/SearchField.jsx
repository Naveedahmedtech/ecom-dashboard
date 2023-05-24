import * as React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Typography, Modal } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { height } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%", 
  backgroundColor: 'white',
  boxShadow: 24,
  padding: '10px',
  minHeight: '250px'
};

export default function SearchField() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SearchOutlinedIcon className="pointer lg-font" onClick={handleOpen} />
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div style={style}>
          <div className="flex flex-wrap">
            <Typography gutterBottom variant="h5">
              Search
            </Typography>
            <span className="p-input-icon-left full-width">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search"
                className="full-width primary-color"
              />
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
