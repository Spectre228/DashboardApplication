import { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react";
import BurgerMenu from "../components/UI/BurgerMenu/BurgerMenu";
import { BrowserRouter } from "react-router";
import AppRouter from "../components/AppRouter";

type StoryProps = ComponentProps<typeof BurgerMenu>;

const meta: Meta<StoryProps> = {
    component: BurgerMenu,
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const SomeStory: Story = {
    render: () => {
        return (
            <BrowserRouter>
                <AppRouter/>
                <BurgerMenu/>
            </BrowserRouter>
        );
    },

    decorators: [
        (Story) => 
            <div className="decorator-wrapper">
                <style>
                    {
                        `.decorator-wrapper * {
                            color: white;
                            text-decoration: none;
                        }`
                    }
                </style>
                <Story/>
            </div>
    ],
};