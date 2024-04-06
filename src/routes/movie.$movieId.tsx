import { createFileRoute } from "@tanstack/react-router";
import { fetchMovie } from "./-loaders/fetchMovie";
import { imageSizes, imagesBaseUrl } from "./-utils/images";

export const Route = createFileRoute("/movie/$movieId")({
  loader: ({ params }) => fetchMovie(params.movieId),
  component: Movie,
});

function Movie() {
  const movieData = Route.useLoaderData();

  if (!movieData) {
    return <div />;
  }

  const backdropPath = movieData.backdrop_path;

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex justify-center">
        <img
          src={`${imagesBaseUrl}${imageSizes.backdrop.large}${backdropPath}`}
        />
        <span className="absolute bottom-2 text-2xl">{movieData.title}</span>
      </div>
      <div className="m-4 flex flex-grow flex-col p-4"></div>
    </div>
  );
}
