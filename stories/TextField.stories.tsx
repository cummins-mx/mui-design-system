import React from 'react';
import BasicTextField from '../components/atoms/TextField';

export default {
  title: 'Atoms/BasicTextField',
  component: BasicTextField,
};

const Template = (args) => <BasicTextField {...args} id="field-id"/>;

export const BasicTextField_ = Template.bind({});
BasicTextField_.args = {
 label: '',
 variant: 'outlined',

};