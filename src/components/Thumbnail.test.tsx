import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Thumbnail } from "./Thumbnail";
test("renders h1 text", () => {
  const { getByRole } = render(<Thumbnail src="https://via.placeholder.com/150" />);
  const thumbnail = getByRole("img");
  expect(thumbnail).toHaveAttribute("src", "https://via.placeholder.com/150");
});
