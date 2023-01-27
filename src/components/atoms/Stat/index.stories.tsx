import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stat } from '.';

export default {
  title: 'Atoms/Stat',
  component: Stat,
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: /MOCK.*$/,
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => <Stat {...args} />;

export const Default = Template.bind({});

export const MOCK_STAT_DATA = {
  currency: 'usd',
  currentPrice: 23013.84,
  lastUpdated: '2023-01-26T05:19:00.687Z',
  priceChange24hr: 561.18,
  priceChangePercentage24hr: 2.47941,
  low24Hr: 22438,
  high24Hr: 23501,
};

Default.args = {
  ...MOCK_STAT_DATA,
};

export const JPY = Template.bind({});
JPY.args = {
  ...MOCK_STAT_DATA,
  currency: 'JPY',
};
