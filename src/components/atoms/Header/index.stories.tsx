import { ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Atoms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const Default = Header;
