import React from 'react';
import BasicSelect from '../components/atoms/Select';

const options = [
  {value: 10, label: 'Ten'},
  {value: 20, label: 'Twenty'},
  {value: 30, label: 'Thirty'},
  {value: 40, label: 'Forty'},
]


export default {
  title: 'Atoms/Select',
  component: BasicSelect,
};

const Template = (args) => <BasicSelect {...args} options={options} id='demo-id' defaultText='Default'/>;

export const Select_ = Template.bind({});
Select_.args = {
 helperText: '',
};

