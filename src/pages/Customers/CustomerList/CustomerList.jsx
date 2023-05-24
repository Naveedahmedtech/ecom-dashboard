import List from "./List";
import { Typography } from "@mui/material";
const CustomerList = () => {
  return (
    <main className="pdt-3 main-content-margin">
      <div>
        <Typography variant="h4" className="primary-color">
          Customers
        </Typography>
      </div>
      <List />
    </main>
  );
};

export default CustomerList;
