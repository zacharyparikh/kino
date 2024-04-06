import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const disabled = !value;

  return (
    <form
      className="bg-secondary-container dark:bg-secondary-container-dark text-on-secondary-container dark:text-on-secondary-container-dark col-span-2 flex h-10 w-full items-center gap-4 justify-self-center rounded-full px-8"
      name="searchbar"
      onSubmit={(event) => {
        event.preventDefault();
        navigate({ to: "/search", search: { query: value, page: 1 } });
      }}
    >
      <input
        className="h-full flex-grow border-none bg-inherit outline-none"
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
