import React from 'react';
import { TextField } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Atoms/TextField',
  component: TextField,
};

const Template = (args) => <ThemeProvider theme={zeusTheme}><TextField {...args} /></ThemeProvider>;

export const TextField_ = Template.bind({});
TextField_.args = {
 variant: 'filled',
};