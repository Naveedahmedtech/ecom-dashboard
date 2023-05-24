import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { Typography, FormControlLabel, FormGroup, Switch } from "@mui/material";
export default function AddPrice() {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(10.5);
  const [checked, setChecked] = useState(false);

  return (
    <div className="card flex flex-column flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="stacked-buttons" className="font-bold block mb-2">
          Price
        </label>
        <InputNumber
          inputId="stacked-buttons"
          value={value1}
          onValueChange={(e) => setValue1(e.value)}
          showButtons
          mode="currency"
          currency="USD"
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="stacked-buttons" className="font-bold block mb-2">
          Selling Price
        </label>
        <InputNumber
          inputId="stacked-buttons"
          value={value2}
          onValueChange={(e) => setValue2(e.value)}
          showButtons
          mode="currency"
          currency="USD"
        />
      </div>
      <div className="flex">
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Keep selling when stock is empty"
          />
        </FormGroup>
      </div>
    </div>
  );
}
