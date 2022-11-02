import { useState } from "react";

export const useUnpute = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};
