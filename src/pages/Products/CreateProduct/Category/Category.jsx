import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
const Category = () => {
      const [age, setAge] = React.useState("");

      const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Electronics</MenuItem>
          <MenuItem value={20}>Mobiles</MenuItem>
          <MenuItem value={30}>T-Shirts</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Category
