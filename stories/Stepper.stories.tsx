import React from 'react';
import BasicTextField from '../components/atoms/TextField';
import HorizontalNonLinearStepper from '../components/molecules/Stepper';

export default {
  title: 'Molecules/Stepper',
  component: HorizontalNonLinearStepper,
};

const Template = (args) => <HorizontalNonLinearStepper {...args} />;

export const Stepper_ = Template.bind({});
Stepper_.args = {
 
};