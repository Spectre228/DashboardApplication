import { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react";
import { RadarChartDiagram } from "../components/dashBoards/RadarChartDiagram/RadarChartDiagram";
import ColumnTextTickIcon from "../components/dashBoards/CustomTickIcons/ColumnTextTickIcon/ColumnTextTickIcon";
import { BaseTickContentProps } from "recharts";
import { InputType } from "storybook/internal/csf";

type StoryProps = ComponentProps<typeof RadarChartDiagram>;

const objectControlPreset: InputType = {
    control: {
        type: "object"
    }
};

const meta: Meta<StoryProps> = {
    component: RadarChartDiagram,
    tags: ["autodocs"],
    argTypes: {
        tooltip: objectControlPreset,
        angleAxisTick: objectControlPreset,
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const SimpleRadarChart: Story = {
    args: {
        objectName: "Simple Radar Chart",
        headerType: "h2",
        headerStyles: {
            marginLeft: "10px",
            color: "white",
        },

        data: [
            {name: "Vertex 1", rating: 7},
            {name: "Vertex 2", rating: 5},
            {name: "Vertex 3", rating: 3},
        ],

        dataKeys: {
            vertices: "name",
            dataScale: "rating",
        },

        style: {
            width: "300px",
            height: "210px",
        },

        chartStyles: {
            width: "290px",
            height: "230px",
            margin: "auto",
        },
    }
};

export const MutliVertexRadarChart: Story = {
    args: {
        objectName: "Mutli Vertex Radar Chart",
        headerType: "h2",
        headerStyles: {
            marginLeft: "10px",
            color: "white",
        },

        data: [
            {name: "First Vertex", rating: 7},
            {name: "Second Vertex", rating: 5},
            {name: "Third Vertex", rating: 3},
            {name: "Fourth Vertex", rating: 7},
            {name: "Fifth Vertex", rating: 5},
            {name: "Sixth Vertex", rating: 3},
            {name: "Seventh Vertex", rating: 7},
            {name: "Eightth Vertex", rating: 5},
            {name: "Nineth Vertex", rating: 3},
        ],

        dataKeys: {
            vertices: "name",
            dataScale: "rating",
        },

        style: {
            width: "435px",
            height: "380px",
        },

        chartStyles: {
            width: "400px",
            height: "350px",
            margin: "auto",
        },

        radiusAxisTicksSize: 18,
    },

    render: (args) => {
        const angleAxisTick = (props: BaseTickContentProps) =>
                                <ColumnTextTickIcon textSplitterator=" "
                                                    {...props}
                                />

        return (
            <RadarChartDiagram angleAxisTick={angleAxisTick}
                                             {...args}
            />
        );
    }
};