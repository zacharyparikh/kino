import * as stylex from "@stylexjs/stylex";
import type { Result } from "../-types/result";
import { imageSizes, imagesBaseUrl } from "../../-utils/images";
import { tokens } from "../../../tokens.stylex";

const getReleaseYear = (releaseDate: string) => releaseDate.split("-")[0];

const styles = stylex.create({
  root: {
    backgroundColor: tokens.secondaryContainer,
    color: tokens.onSecondaryContainer,
    margin: "2em 0",
    padding: "1em 1em",
    display: "flex",
    gap: "0.5em",
    borderRadius: "0.5em",
  },
  details: { display: "flex", flexDirection: "column", gap: "0.5em" },
  titleContainer: { display: "flex", gap: "0.5em" },
  title: { margin: 0 },
  releaseYear: { lineHeight: "1.4em" },
});

export function ResultItem({
  id,
  title,
  release_date: releaseDate,
  poster_path: posterPath,
  overview,
}: Result) {
  return (
    <li key={id} {...stylex.props(styles.root)}>
      <img src={`${imagesBaseUrl}${imageSizes.poster.small}${posterPath}`} />
      <div {...stylex.props(styles.details)}>
        <div {...stylex.props(styles.titleContainer)}>
          <h3 {...stylex.props(styles.title)}>{title}</h3>
          {releaseDate && (
            <span {...stylex.props(styles.releaseYear)}>
              {getReleaseYear(releaseDate)}
            </span>
          )}
        </div>
        <div>{overview}</div>
      </div>
    </li>
  );
}
