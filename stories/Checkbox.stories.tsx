import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <ThemeProvider theme={zeusTheme} ><Checkbox {...args} /></ThemeProvider>;

export const Checkbox_ = Template.bind({});
Checkbox_.args = {
  label: { inputProps: { 'aria-label': 'Checkbox demo' } }

};


