<script lang="ts">
  import { page } from '$app/stores';
  import classNames from 'classnames';

  import Button from '../form/Button.svelte';

  import { goto } from '$app/navigation';
  import type { PathData } from '@src/lib/model/path-structure';
  import { menuVisibleStore } from '@src/lib/stores/menu.store';
  import SideBarItem from '../SideBarItem.svelte';

  export let path: PathData;
</script>

<aside
  class={classNames(
    'min-w-screen fixed z-[10] flex w-screen bg-white dark:bg-black md:relative md:w-[16rem] md:min-w-[16rem]',
    'transition-transform duration-500 ease-in-out',
    $menuVisibleStore ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
  )}
>
  <div class="sticky top-[4rem] h-[calc(100vh-4rem)] flex-1 flex-col">
    <section
      class={classNames(
        'p-16',
        'shadow-[0_2px_4px_rgba(0,0,0,0.02),0_-1px_0_rgba(0,0,0,0.06)_inset] dark:shadow-[0_-1px_0_rgba(255,255,255,0.1)_inset]',
        'contrast-more:shadow-[0_0_0_1px_#000] dark:contrast-more:shadow-[0_0_0_1px_#fff]'
      )}
    >
      <Button
        label="Home"
        selected={$page.url.pathname === '/'}
        click={() => goto('/')}
      />
    </section>

    <section
      class="flex flex-col overflow-y-scroll overscroll-y-none scroll-smooth p-16 scrollbar-hide"
    >
      {#each Object.entries(path) as [key, item]}
        <SideBarItem path={key} item={item} />
      {/each}
    </section>
  </div>
</aside>
