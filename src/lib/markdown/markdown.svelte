<script context="module">
  import a from './a.svelte';
  import h1 from './h1.svelte';
  import h2 from './h2.svelte';
  import p from './p.svelte';
  import ul from './ul.svelte';

  export { a, h1, h2, p, ul };
</script>

<script lang="ts">
  export let title;
  export let data;
  export let form;
</script>

{#if typeof title === 'string'}
  <h1
    class="mb-[16px] border-b-[2px] border-b-black/10 pb-[10px] dark:border-b-white/10"
  >
    {title}
  </h1>
{/if}

<slot />
