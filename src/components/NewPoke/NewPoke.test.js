import React from "react";
import { shallow } from "enzyme";
import NewPoke from "./NewPoke";

describe("NewPoke", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewPoke />);
    expect(wrapper).toMatchSnapshot();
  });
});
