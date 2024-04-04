import type { Meta, StoryObj } from '@storybook/react';
import { OneRepMaxComponent } from '../Components/OneRepMax';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/OneRepMaxComponent',
  component: OneRepMaxComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  /* argTypes: {
    backgroundColor: { control: 'color' },
  }, */
  args: { /* onClick: fn() */ },
} satisfies Meta<typeof OneRepMaxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    className: 'sbdocs',
    ref: undefined
  },
};