import React, { FunctionComponent } from "react";
import { iGif } from "../Interfaces";
import { useFetchGifs } from "./../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import { string } from "prop-types";

export const GifGrid: FunctionComponent<{ category: string }> = ({
  category,
}) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img: iGif) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: string.isRequired,
};
