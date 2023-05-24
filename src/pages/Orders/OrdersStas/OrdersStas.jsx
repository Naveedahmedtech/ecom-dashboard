import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ordersService } from "./service/ordersService";
import "./flag.css";

export default function OrdersStas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ordersService.getProductsMini().then((data) => setProducts(data));
  }, []);


  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="inventoryStatus" header="Status"></Column>
      </DataTable>
    </div>
  );
}
