import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextField({ id, ...args}) {
  return (
      <TextField id={id} {...args} />
  );
}