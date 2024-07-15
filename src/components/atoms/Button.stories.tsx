import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { fn } from "@storybook/test";

const meta = {
  component: Button,
  argTypes: {
    size: { control: "select" },
    variant: { control: "select" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
