import type { Result } from "../-types/result";
import { imageSizes, imagesBaseUrl } from "../../-utils/images";

const getReleaseYear = (releaseDate: string) => releaseDate.split("-")[0];

export function ResultItem({
  id,
  title,
  release_date: releaseDate,
  poster_path: posterPath,
  overview,
}: Result) {
  return (
    <li
      key={id}
      className="bg-secondary-container dark:bg-secondary-container-dark text-on-secondary-container dark:text-on-secondary-container-dark my-8 flex gap-2 rounded-lg border border-none p-4"
    >
      <img src={`${imagesBaseUrl}${imageSizes.poster.small}${posterPath}`} />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h3>{title}</h3>
          {releaseDate && (
            <span className="leading-6">{getReleaseYear(releaseDate)}</span>
          )}
        </div>
        <div>{overview}</div>
      </div>
    </li>
  );
}
