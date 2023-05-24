import { Typography } from "@mui/material"
import TabList from "./TabList"

const OrderList = () => {
  return (
    <>
      <main className="pdt-3 main-content-margin">
        <Typography variant="h4" className="primary-color">
          Orders
        </Typography>
        <TabList />
      </main>
    </>
  );
}

export default OrderList
