import React from "react";
import { shallow } from "enzyme";
import Card from "./card";

describe("Card", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
