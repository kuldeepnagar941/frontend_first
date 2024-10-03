
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Slices/ThemeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
