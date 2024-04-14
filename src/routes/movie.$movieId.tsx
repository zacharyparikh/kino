import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { imageSizes, imagesBaseUrl } from "./-utils/images";
import { movieOptions } from "./-queryOptions/movie";

export const Route = createFileRoute("/movie/$movieId")({
  loader: ({ params: { movieId }, context: { queryClient } }) =>
    queryClient.ensureQueryData(movieOptions(movieId)),
  component: Movie,
});

function Movie() {
  const { movieId } = Route.useParams();
  const movieQuery = useSuspenseQuery(movieOptions(movieId));
  const { backdrop_path: backdropPath, title } = movieQuery.data;

  return (
    <div className="flex h-full flex-col">
      <div className="relative flex justify-center">
        {backdropPath && (
          <img
            src={`${imagesBaseUrl}${imageSizes.backdrop.large}${backdropPath}`}
          />
        )}
        <span className="absolute bottom-2 text-2xl">{title}</span>
      </div>
      <div className="m-4 flex flex-grow flex-col p-4"></div>
    </div>
  );
}
