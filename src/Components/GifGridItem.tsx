import React, { FunctionComponent } from "react";
import { iImg } from "./../Interfaces";

export const GifGridItem: FunctionComponent<iImg> = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounceInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
