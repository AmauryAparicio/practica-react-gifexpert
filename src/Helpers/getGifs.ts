import { iGifObject, iGifResponse, iGif } from "./../Interfaces";

export const getGifs = async (category: string): Promise<iGif[]> => {
  const url: string = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=smR5EKSCigh874tzFtL4zUrNKiYzRbke`;

  const resp: Response = await fetch(url);

  const { data }: iGifResponse = await resp.json();

  const gifs: Array<iGif> = data.map(
    (img: iGifObject): iGif => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    }
  );
  return gifs;
};
