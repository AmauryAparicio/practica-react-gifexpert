import { shallow } from "enzyme";
import { GifExpertApp } from "../../Components/GifExpertApp";
import React from "react";
describe("Pruebas en <GifExpertApp/>", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(
      <GifExpertApp defaultCategories={["One Punch Man"]} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias", () => {
    const categories: string[] = ["One Punch Man", "Dragon ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
