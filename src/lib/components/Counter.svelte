<script lang="ts">
  let count: number = 0;
</script>

<section class="my-[20px] flex flex-row items-center self-center">
  <button
    class="h-[60px] w-[60px] rounded bg-red-400 text-[30px] text-white"
    on:click={() => (count = count - 1)}
  >
    {`-`}
  </button>
  <span class="mx-[12px] w-[2rem] text-center text-xl font-bold">{count}</span>
  <button
    class="h-[60px] w-[60px] rounded bg-blue-400 text-[30px] text-white"
    on:click={() => (count = count + 1)}
  >
    {`+`}
  </button>
</section>
