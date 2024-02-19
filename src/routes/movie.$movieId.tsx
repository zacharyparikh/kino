import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { fetchMovie } from "./-loaders/fetchMovie";

export const Route = createFileRoute("/movie/$movieId")({
  loader: ({ params }) => fetchMovie(params.movieId),
  component: Movie,
});

const styles = stylex.create({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  backdrop: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    flexGrow: 1,
    margin: "1em",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
  },

  title: { fontSize: "2em", position: "absolute", bottom: 10 },
});

function Movie() {
  const movieData = Route.useLoaderData();

  if (!movieData) {
    return <div />;
  }

  const backdropPath = movieData.backdrop_path;

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.backdrop)}>
        <img src={`https://image.tmdb.org/t/p/w1280${backdropPath}`} />
        <span {...stylex.props(styles.title)}>{movieData.title}</span>
      </div>
      <div {...stylex.props(styles.container)}></div>
    </div>
  );
}
