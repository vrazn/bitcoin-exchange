import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrencyChart } from '.';
import { MOCK_GRAPH_DATA } from './mock';

export default {
  title: 'Atoms/CurrencyChart',
  component: CurrencyChart,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CurrencyChart>;

const Template: ComponentStory<typeof CurrencyChart> = (args) => (
  <CurrencyChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Price',
  data: MOCK_GRAPH_DATA.prices,
};
