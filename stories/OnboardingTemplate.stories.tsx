import React from 'react';
import OnboardingTemplate from '../components/templates/OnboardingTemplate';
import { ThemeProvider } from '@emotion/react';
import zeusTheme from '../themes/zeus';



export default {
  title: 'Templates/Onboarding',
  component: OnboardingTemplate,
};

const Template = (args) =>  <ThemeProvider theme={zeusTheme}><OnboardingTemplate {...args} /></ThemeProvider>;

export const Onboarding = Template.bind({});
Onboarding.args = {
 
};