import * as stylex from "@stylexjs/stylex";
import { tokens } from "../../tokens.stylex";

const styles = stylex.create({
  root: {
    backgroundColor: tokens.secondaryContainer,
    color: tokens.onSecondaryContainer,

    borderStyle: "none",
    borderRadius: 100,

    width: 550,
    height: 40,

    padding: "0 2em",
  },
});

export function SearchBar() {
  return (
    <input
      type="text"
      id="searchbar"
      placeholder="Search"
      {...stylex.props(styles.root)}
    />
  );
}
