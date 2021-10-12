<script lang="ts">
  import { onMount } from 'svelte';
  import type { Images } from './types/Images';
  import Movies from './components/Movies.svelte';

  let imagesConfig: Images;
  onMount(async () => {
    const results = await fetch('http://localhost:4000/imagesConfig');
    imagesConfig = await results.json();
  });
</script>

<main>
  <h1>Kino</h1>
  {#if imagesConfig}
    <Movies {imagesConfig} />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
