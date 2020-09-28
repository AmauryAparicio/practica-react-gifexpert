import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "./../../Hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    const { data: images, loading } = result.current;
    await waitForNextUpdate();
    expect(images).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    await waitForNextUpdate();
    const { data: images, loading } = result.current;
    expect(images.length).toBe(10);
    expect(loading).toBe(false);
  });
});
