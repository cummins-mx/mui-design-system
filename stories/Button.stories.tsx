import React from 'react';
import BasicButton from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: BasicButton,
};

const Template = (args) => <BasicButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'contained'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    vatiant: 'text'
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
    variant: 'outlined'
    
};
