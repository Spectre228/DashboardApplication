import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { BarChartDiagram } from "../components/dashBoards/BarChartDiagram/BarChartDiagram";
import { XAxisTickContentProps, YAxisTickContentProps } from "recharts";
import { PictogramTickIcon } from "../components/dashBoards/CustomTickIcons/PictogramTickIcon/PictogramTickIcon";
import { InputType } from "storybook/internal/csf";

type StoryProps = ComponentProps<typeof BarChartDiagram>;

const objectControlPreset: InputType = {
    control: {
        type: "object"
    }
};

const meta: Meta<StoryProps> = {
    component: BarChartDiagram,
    tags: ["autodocs"],
    argTypes: {
        tooltip: objectControlPreset,
        xAxisTick: objectControlPreset,
        yAxisTick: objectControlPreset,
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const SimpleBarchart: Story = {
    args: {
        objectName: "Simple Barchart",
        headerType: "h2",
        headerStyles: {
            marginLeft: "15px",
            marginBottom: "10px",
            color: "white",
        },

        data: [
            {name: "Bar 1", rating: 7},
            {name: "Bar 2", rating: 5},
            {name: "Bar 3", rating: 3},
        ],

        dataKeys: {
            barNames: "name",
            barScales: "rating",
        },

        style: {
            width: "500px",
            height: "200px",
        },

        chartStyles: {
            width: "95%",
            height: "180px",
            margin: "auto",
        },

        yAxisWidth: 15,
    }
};

export const BarchartWithCustomTicks: Story = {
    args: {
        objectName: "Barchart With Custom Ticks",
        headerType: "h3",
        headerStyles: {
            marginLeft: "15px",
            marginBottom: "10px",
            color: "white",
        },

        data: [
            {name: "Bar 1", rating: 7},
            {name: "Bar 2", rating: 5},
            {name: "Bar 3", rating: 3},
            {name: "Bar 4", rating: 2},
            {name: "Bar 5", rating: 4},
        ],

        dataKeys: {
            barNames: "name",
            barScales: "rating",
        },

        style: {
            width: "800px",
            height: "300px",
        },

        chartStyles: {
            width: "95%",
            height: "275px",
            margin: "auto",
        },

        yAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        yAxisWidth: 35,
    },

    render: (args) => {
        const yAxisTick = (props: YAxisTickContentProps) =>
                            <PictogramTickIcon pictogram="💀"
                                                otherSvgTextElementProps={{dy: 7.5, fontSize: 14}}
                                                {...props}
                                                textAnchor="end"
                            />

        const xAxisTick = (props: XAxisTickContentProps) =>
                            <PictogramTickIcon pictogram="☠️"
                                                otherSvgTextElementProps={{dy: 5, fontSize: 14}}
                                                {...props}
                            />

        return (
            <BarChartDiagram yAxisTick={yAxisTick}
                             xAxisTick={xAxisTick}
                                       {...args}
            />
        )
    }
};