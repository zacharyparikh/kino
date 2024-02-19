import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import * as stylex from "@stylexjs/stylex";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { tokens } from "../../tokens.stylex";

const styles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
    backgroundColor: tokens.secondaryContainer,
    color: tokens.onSecondaryContainer,

    borderRadius: 100,
    width: 550,
    height: 40,

    padding: "0 2em",
  },

  input: {
    borderStyle: "none",
    backgroundColor: "inherit",
    flexGrow: 1,
    height: "100%",
    outline: {
      ":focus": "none",
    },
    padding: 0,
    color: "inherit",
  },
});

export function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const disabled = !value;

  return (
    <form
      {...stylex.props(styles.root)}
      name="searchbar"
      onSubmit={(event) => {
        event.preventDefault();
        navigate({ to: "/search", search: { query: value } });
      }}
    >
      <input
        {...stylex.props(styles.input)}
        type="search"
        id="searchbar"
        placeholder="Search"
        autoComplete="off"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </button>

      <IconButton disabled={disabled} type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
}
