import React from 'react';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';
import { Paper } from '@mui/material';

export default {
  title: 'Atoms/Papers',
  component: Paper,
};

const Template = (args) => <ThemeProvider theme={zeusTheme} ><Paper {...args} /> </ThemeProvider>;

export const BasicPaper = Template.bind({});
BasicPaper.args = {
 sx: {width: '150px', height: '150px'}
};

export const OutlinedPaper = Template.bind({});
OutlinedPaper.args = {
 sx: {width: '150px', height: '150px'},
 variant: 'outlined',
};