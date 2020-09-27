import React, { FunctionComponent } from "react";
import { iImg } from "./../Interfaces";
import { string } from "prop-types";

export const GifGridItem: FunctionComponent<iImg> = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounceInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
};
