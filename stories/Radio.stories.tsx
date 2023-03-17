import React from 'react';
import { Radio } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Atoms/RadioButton',
  component: Radio,
};

const Template = (args) => <ThemeProvider theme={zeusTheme}><Radio {...args} /></ThemeProvider>;

export const RadioButton = Template.bind({});
RadioButton.args = {
};


