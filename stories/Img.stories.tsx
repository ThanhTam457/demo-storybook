import type { Meta, StoryObj } from '@storybook/react';
import Img from '../app/components/Img/Img';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Image',
    component: Img,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        src: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
        rotate: { control: { type: 'number', min:1, max:90, step: 0.1 } },
    },
} as Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
import type { Story } from '@storybook/addon-docs/blocks';

export const Default: Story = {
    args: {
        src: "1",
        alt: '1',
        rotate: 0,
        default: true,
    },
};

export const Rotate: Story = {
    args: {
        alt: '1',
        default: false,
        rotate: 0,
        src: "1",
    },
};

