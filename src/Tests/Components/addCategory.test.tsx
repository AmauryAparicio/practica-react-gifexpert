import { shallow, ShallowWrapper } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../Components/AddCategory";
import React from "react";

describe("Pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper: ShallowWrapper<{}, {}, React.Component<{}, {}, any>>;
  const value: string = "Hola Mundo";

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", {
      target: {
        value: value,
      },
    });
  });

  test("no debe de postear la información con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
