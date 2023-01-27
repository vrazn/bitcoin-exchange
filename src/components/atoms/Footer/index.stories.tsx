import { ComponentMeta } from '@storybook/react';

import { Footer } from '.';

export default {
  title: 'Atoms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

export const Default = Footer;
