import { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react";
import BurgerMenu from "./BurgerMenu";
import { BrowserRouter, Route, Routes, } from "react-router";

type StoryProps = ComponentProps<typeof BurgerMenu>;

const meta: Meta<StoryProps> = {
    component: BurgerMenu,
    tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const SomeStory: Story = {
    render: () => {
        const MockRouter = () =>
                            <Routes>
                                <Route path="/dashBoards"
                                    element={<div>Mock Dash Boards Page</div>}
                                />
                                <Route path="/settings"
                                    element={<div>Mock Settings Page</div>}
                                />
                            </Routes>

        return (
            <BrowserRouter>
                <MockRouter/>
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