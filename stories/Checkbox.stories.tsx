import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checkbox_ = Template.bind({});
Checkbox_.args = {
  label: { inputProps: { 'aria-label': 'Checkbox demo' } },

};