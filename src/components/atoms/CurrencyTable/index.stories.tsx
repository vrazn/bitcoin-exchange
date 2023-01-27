import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrencyTable, CurrencyTableProps } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/CurrencyTable',
  component: CurrencyTable,
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  excludeStories: /MOCK.*$/,
} as ComponentMeta<typeof CurrencyTable>;

const Template: ComponentStory<typeof CurrencyTable> = (args) => (
  <CurrencyTable {...args} />
);

export const Default = Template.bind({});

export const MOCK_CURRENCY_DATA: CurrencyTableProps['data'] = [
  {
    currency: 'USD',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'EUR',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'CHF',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'KWD',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'CAD',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'SGD',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'RUB',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'JPY',
    price: 22000,
    '1hrChange': -0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'KRW',
    price: 22000,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
  {
    currency: 'HKD',
    price: 22000.544,
    '1hrChange': 0.5,
    '24hrChange': 0.1,
    '7dChange': 1,
  },
];

Default.args = {
  data: MOCK_CURRENCY_DATA,
};
