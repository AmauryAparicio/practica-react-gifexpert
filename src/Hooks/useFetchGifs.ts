import { useState, useEffect } from "react";
import { getGifs } from "./../Helpers/getGifs";
import { iState } from "../Interfaces";

export const useFetchGifs = (category: string): iState => {
  const [state, setState] = useState<iState>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
