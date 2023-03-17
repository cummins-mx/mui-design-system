import React from 'react';
import RowRadioButtonsGroup from '../components/molecules/RadioButtonsGroup';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';

export default {
  title: 'Molecules/RadioButtonsGroup',
  component: RowRadioButtonsGroup,
};

const Template = (args) => <ThemeProvider theme={zeusTheme}><RowRadioButtonsGroup {...args} /></ThemeProvider>;

export const RadioButtonsGroup_ = Template.bind({});
RadioButtonsGroup_.args = {
};


