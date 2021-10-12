<script lang="ts">
  import { onMount } from 'svelte';
  import type { Images } from '../types/Images';
  import type { Movie } from '../types/Movie';
  import MovieTile from './MovieTile.svelte';

  export let imagesConfig: Images;
  export let size: number = 0;
  const imagesUrl = imagesConfig.base_url;
  const posterSizes = imagesConfig.poster_sizes;
  let movies: Movie[] = [];

  onMount(async () => {
    const results = await fetch('http://localhost:4000/movies/', {
      mode: 'cors',
    });

    const data = await results.json();
    movies = data.results;
  });

  $: console.log(movies);
</script>

{#each movies as { title, poster_path }}
  <MovieTile
    {title}
    posterUrl={`${imagesUrl}${posterSizes[size]}${poster_path}`}
  />
{/each}
