import React, {useState} from "react";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Typography } from "@mui/material";        
import { Button } from "primereact/button";
import UploadImage from "./UploadImage/UploadImage";
import AddPrice from "./AddPrice/AddPrice";
import Category from "./Category/Category";
export default function CreateProduct() {
  const [text, setText] = useState("");
   const [value, setValue] = useState("");
   const [value2, setValue2] = useState("");
   const [value3, setValue3] = useState("");
    return (
      <>
        <main className="pdt-3 main-content-margin">
          <div>
            <Typography variant="h5">Basic details</Typography>
          </div>
          <div className="card flex">
            <InputText
              value={value}
              className="full-width"
              placeholder="Title"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="card">
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "200px" }}
            />
          </div>
          <div>
            <Typography gutterBottom variant="h5">
              Upload Image
            </Typography>
          </div>
          <div>
            <UploadImage />
          </div>
          <div>
            <Typography gutterBottom variant="h5">
              Add Price
            </Typography>
          </div>
          <div>
            <AddPrice />
          </div>
          <div>
            <Typography gutterBottom variant="h5">
              Select Category
            </Typography>
          </div>
          <div>
            <Category />
            <div className="card flex">
              <InputText
                value={value2}
                className="full-width"
                placeholder="Barcode"
                onChange={(e) => setValue2(e.target.value)}
              />
            </div>
            <div className="">
              <InputText
                value={value3}
                className="full-width"
                placeholder="SKU"
                onChange={(e) => setValue3(e.target.value)}
              />
            </div>
          </div>
          <div className="card flex justify-content-end">
            <Button
              label="Cancel"
              className="mr-4"
              severity="secondary"
              icon="pi pi-times"
            />
            <Button label="Create" icon="pi pi-check" />
          </div>
        </main>
      </>
    );
}

