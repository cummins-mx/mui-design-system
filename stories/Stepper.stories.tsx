import React from 'react';
import HorizontalNonLinearStepper from '../components/molecules/Stepper';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Molecules/Stepper',
  component: HorizontalNonLinearStepper,
};

const Template = (args) => <ThemeProvider theme={zeusTheme} ><HorizontalNonLinearStepper {...args} /> </ThemeProvider>;

export const Stepper_ = Template.bind({});
Stepper_.args = {
 
};