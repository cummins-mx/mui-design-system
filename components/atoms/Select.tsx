import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


export default function BasicSelect({ id, options, defaultText, ...args}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <>
      <FormControl fullWidth>
      <Select
        id={id}
        value={value}
        onChange={handleChange}
        displayEmpty
      >
      {defaultText && <MenuItem value="">{defaultText}</MenuItem>}
      {options.map((option)=>
        <MenuItem value={option.value}>{option.label}</MenuItem>
      )}
      </Select>
      <FormHelperText>{args.helperText}</FormHelperText>
    </FormControl>
  </>
  );
}

