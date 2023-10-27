import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '../app/components/Gallery/Gallery';
import { Rotate as ImgRotate, Rotate } from './Img.stories';
import Img from '../app/components/Img/Img';

// Remove this line: export const Rotate = ImgRotate;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Gallery',
    component: Gallery,
    subcomponents: { 
        Img,
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        rotate: [{ control: { type: 'number', min:0, max:90, step: 0.1 } }, { control: { type: 'number', min:0, max:90, step: 0.1 } }, { control: { type: 'number', min:0, max:90, step: 0.1 } }, { control: { type: 'number', min:0, max:90, step: 0.1 } }, { control: { type: 'number', min:0, max:90, step: 0.1 } }, { control: { type: 'number', min:0, max:90, step: 0.1 } }]
    },
} as Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Props {
    default?: boolean;
    rotate?: number;
    src?: "1" | "2" | "3" | "4" | "5" | "6";
    alt: string;
}

export const Example: Story = {
    args: {
        rotate: [0, 0, 0, 0, 0, 0],

    },
}
           
