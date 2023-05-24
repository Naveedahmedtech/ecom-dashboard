import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import OrdersStas from "./OrdersStas/OrdersStas";
import Search from "./Search";

export default function TabList() {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="All">
          <Search />
          <OrdersStas />
        </TabPanel>
        <TabPanel header="Pending">
          <Search />
          <OrdersStas />
        </TabPanel>
        <TabPanel header="Cancelled">
          <Search />
          <OrdersStas />
        </TabPanel>
        <TabPanel header="Completed">
          <Search />
          <OrdersStas />
        </TabPanel>
        <TabPanel header="Rejected">
          <Search />
          <OrdersStas />
        </TabPanel>
      </TabView>
    </div>
  );
}
