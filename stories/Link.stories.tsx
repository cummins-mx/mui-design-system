import React from 'react';
import { Link } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Atoms/Links',
  component: Link,
};

const Template = (args) => <ThemeProvider theme={zeusTheme} ><Link {...args} /></ThemeProvider>;

export const BasicLink_ = Template.bind({});
BasicLink_.args = {
children: 'Link',
underline: 'none',
href: '#'
};

export const Underlined_ = Template.bind({});
Underlined_.args = {
children: 'Link',
href: '#'

};

export const HoverLink = Template.bind({});
HoverLink.args = {
children: 'Link',
underline: 'hover',
href: '#',
};
