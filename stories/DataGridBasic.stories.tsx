import React from 'react';
import DataGridDemo from "../components/organisms/DataGridBasic";

export default {
    title: 'Organisms/GridBasic',
    component: DataGridDemo,
}

const Template = (args)=> <DataGridDemo {...args} />

export const GridBasic = Template.bind({});

GridBasic.args = {

};