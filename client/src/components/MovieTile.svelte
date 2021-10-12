<script lang="ts">
  export let title: string;
  export let posterUrl: string;
</script>

<div>
  <p>{title}</p>
  <img src={posterUrl} alt="{title} poster" />
</div>
