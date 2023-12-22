import React from "react";

import { render, screen } from "@testing-library/react";
import * as stories from "./ActWarning.stories";
import { composeStories } from "@storybook/react";
import { userEvent } from "@testing-library/user-event";
import { ActWarning } from "./ActWarning";

const { Basic } = composeStories(stories);
describe("ActWarning from storybook", () => {
  it("throws act warnings when ran", async () => {
    // but throws act warning
    const { container } = render(<Basic />);

    await Basic.play({ canvasElement: container });
  });

  it("should not throw any act warning", async () => {
    render(<Basic />);

    await userEvent.click(screen.getByRole("button", { name: "Show message" }));

    await expect(screen.getByText("Demo message")).toBeInTheDocument();
  });
});

describe("ActWarning direct import", () => {
  it("should not fail", async () => {
    render(<ActWarning />);

    await userEvent.click(screen.getByRole("button", { name: "Show message" }));

    await expect(screen.getByText("Demo message")).toBeInTheDocument();
  });
});
