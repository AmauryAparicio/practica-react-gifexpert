import { shallow } from "enzyme";
import { GifGrid } from "../../Components/GifGrid";
import React from "react";
import { useFetchGifs } from "./../../Hooks/useFetchGifs";
import "@testing-library/jest-dom";
jest.mock("./../../Hooks/useFetchGifs");

describe("Pruebas en el <GifGrid/>", () => {
  const category: string = "Testing";

  test("debe mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {
    const gifs: Array<{ id: string; url: string; title: string }> = [
      {
        id: "ABC",
        url: "https://google.com",
        title: "esto es un título",
      },
      {
        id: "ABCDE",
        url: "https://facebook.com",
        title: "esto es un título 2",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
