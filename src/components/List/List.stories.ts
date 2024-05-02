import type { Meta, StoryObj } from "@storybook/react";

import List from "./List";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/List",
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      { _id: "randomId23423", role: "Engineer" },
      { _id: "randomId234423", role: "QE" },
      { _id: "randomId234423", role: "PO" },
    ],
    listName: "Primary List",
  },
};

export const Secondary: Story = {
  args: {
    data: [
      { _id: "randomId23423", role: "Engineer" },
      { _id: "randomId234423", role: "QE" },
      { _id: "randomId234423", role: "PO" },
    ],
    listName: "Secondary List",
  },
};
