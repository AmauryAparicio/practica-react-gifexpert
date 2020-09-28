import React, { FunctionComponent, useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp: FunctionComponent<{
  defaultCategories: string[];
}> = ({ defaultCategories = [] }): JSX.Element => {
  const [categories, setCategories] = useState<string[]>(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category: string) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
