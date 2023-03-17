import React from 'react';
import BasicSelect from '../components/atoms/Select';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

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

const Template = (args) => <ThemeProvider theme={zeusTheme}><BasicSelect {...args} options={options} id='demo-id' defaultText='Default text'/></ThemeProvider>;

export const Select_ = Template.bind({});
Select_.args = {
 helperText: '',
 variant: 'filled',
};

