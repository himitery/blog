<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import classNames from 'classnames';
  import type { PathData } from '../model/path-structure';
  import Button from './form/Button.svelte';

  export let prefix: string = '';
  export let path: string;
  export let item: {
    page: boolean;
    children: PathData;
  };

  let open: boolean = true;

  const handleRoute = () => {
    if (item.page) goto(`${prefix}/${path}`);
    else open = !open;
  };

  const handleOpen = () => {
    open = !open;
  };
</script>

<li class="flex flex-col">
  <Button
    label={path}
    selected={$page.url.pathname === `${prefix}/${path}`}
    click={handleRoute}
    hasOpen={Object.keys(item.children).length > 0}
    isOpen={open}
    open={handleOpen}
  />

  <section
    class={classNames(
      'ml-2 flex flex-row items-center',
      'overflow-y-hidden transition-all ease-in-out',
      open ? 'max-h-screen duration-700' : 'max-h-0 opacity-10 duration-300',
      'ltr:ml-1 ltr:pl-4 ltr:before:left-0 rtl:mr-1 rtl:pr-4 rtl:before:right-0',
      'before:absoulte before:inset-y-1.5 before:h-[calc(100%-16px)] before:w-px before:bg-gray-200 dark:before:bg-neutral-800'
    )}
  >
    {#if Object.keys(item.children).length > 0}
      <ul class="flex h-full w-full flex-col pl-[8px]">
        {#each Object.entries(item.children) as [key, value]}
          <svelte:self path={key} item={value} prefix={`${prefix}/${path}`} />
        {/each}
      </ul>
    {/if}
  </section>
</li>
