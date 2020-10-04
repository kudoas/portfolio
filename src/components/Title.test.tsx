import React from "react";
import { mount } from "enzyme";
import { StyledTitle } from "./Title";

describe("App", () => {
  const app = mount(<StyledTitle />);

  it("renders the title", () => {
    expect(app.find("div").exists()).toBe(true);
  });
});
