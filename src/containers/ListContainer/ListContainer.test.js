import React from "react";
import { mount } from "enzyme";
import ListContainer from "./ListContainer";

describe("<ListContainer />", () => {
  test("Button 'Refresh' is clicked", () => {
    const spyClick = jest.fn();
    const wrapper = mount(<ListContainer onClick={spyClick} />);

    const buttons = wrapper.find(".button");

    expect(buttons.length).toBe(1);
    buttons.at(0).simulate("click");

    // expect(spyClick).toHaveBeenCalledTimes(1);
    expect(
      wrapper
        .find(".button")
        .at(0)
        .prop("disabled")
    ).toEqual(true);
  });
});
