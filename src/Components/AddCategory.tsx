import React, {
  useState,
  ChangeEvent,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from "react";

import { func } from "prop-types";

export const AddCategory: FunctionComponent<{
  setCategories: Dispatch<SetStateAction<string[]>>;
}> = ({ setCategories }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats: Array<string>) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: func.isRequired,
};
