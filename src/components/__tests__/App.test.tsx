//todo: snapshots

import * as React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {App} from '../App';


describe("App component", () => {

  const component: any = mount(<App />);

  it("is defined", () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ReactWrapper);
  });

  it("renders main content", () => {
    // expect(component.find('main').length).toBe(1);
    expect(component.find('main').children().length).toBe(3);

  });

  // it("shows click count when toggled less than 4 times", () => {
  //   const wrap = mount(<App />);
  //   const toggleButton = wrap.find(".toggle button");
  //   toggleButton.simulate("click");
  //   toggleButton.simulate("click");
  // });

  // it("shows warning message when toggled more than 4 times", () => {
  //   const wrap = mount(<App />);
  //   const toggleButton = wrap.find(".toggle button");
  //   for (let i = 0; i <= 4; i += 1) {
  //     toggleButton.simulate("click");
  //   }
  //   expect(wrap.find(sel("click-warning")).exists()).toBeTruthy();
  // });

});
