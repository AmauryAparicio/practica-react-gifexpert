import { getGifs } from "./../../Helpers/getGifs";
describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = getGifs("One Punch");
    expect((await gifs).length).toBe(10);
  });
});
