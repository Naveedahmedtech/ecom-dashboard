import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { productService } from "./service/productSerivces";
import "./flag.css";

export default function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="name" header="VALUE"></Column>
        <Column field="category" header="ADS SPENT"></Column>
        <Column field="quantity" header="REFUNDS"></Column>
      </DataTable>
    </div>
  );
}
