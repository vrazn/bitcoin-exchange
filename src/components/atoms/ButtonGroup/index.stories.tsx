import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { ButtonGroup } from '.';

export default {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'fullscreen',
  },
  actions: { argTypesRegex: '^on.*' },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'days',
  value: 1,
  buttons: [
    { title: '24hr', value: 1 },
    { title: '7d', value: 7 },
    { title: '14d', value: 14 },
    { title: '30d', value: 30 },
    { title: '90d', value: 90 },
    { title: '180d', value: 180 },
    { title: '1y', value: 365 },
    { title: 'Max', value: 'max' },
  ],
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dayButton = await canvas.getByTestId('btn-group-1');
  await userEvent.click(dayButton);
};
