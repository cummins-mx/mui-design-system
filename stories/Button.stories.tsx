import React from 'react';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';
import { Button } from '@mui/material';

export default {
  title: 'Atoms/Buttons',
  component: Button,
};

const Template = (args) => <ThemeProvider theme={zeusTheme}><Button {...args}>Button Text</Button></ThemeProvider>;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
    variant: "contained",
};


export const TextButton = Template.bind({});
TextButton.args = {
    variant: 'text',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
    variant: 'outlined',
    size: 'large',
    
}; 
