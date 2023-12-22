import { expect, userEvent, within } from "@storybook/test";
import { ActWarning } from "./ActWarning";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/ActWarning",
  component: ActWarning,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Show message" }));

    await expect(canvas.getByText("Demo message")).toBeInTheDocument();
  },
};
