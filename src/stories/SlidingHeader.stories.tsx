import { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react";
import SlidingHeader from "../components/SlidingHeader/SlidingHeader";

type StoryProps = ComponentProps<typeof SlidingHeader>;

const meta: Meta<StoryProps> = {
    component: SlidingHeader,
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<StoryProps>;

const storyRenderFunc = (args: StoryProps) => {
    const outerContainerStyles = {
        width: "250px",
        height: "100px",
        backgroundColor: "rgb(0, 0, 119)",
        color: "white",
        borderRadius: "15px",
    }

    return (
        <div style={outerContainerStyles}>
            <SlidingHeader {...args}/>
        </div>
    );
};

export const ShortHeader: Story = {
    args: {
        headerType: "h2",
        title: "A Short Header",
        style: {marginLeft: "10px"}
    },
    render: storyRenderFunc,
};

export const LongHeader: Story = {
    args: {
        headerType: "h2",
        title: "A Long Header That Is Too Big To Fit In",
        style: {marginLeft: "10px"}
    },
    render: storyRenderFunc,
};