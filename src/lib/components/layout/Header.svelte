<script lang="ts">
  import classNames from 'classnames';
  import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
  import BiMoon from 'svelte-icons-pack/bi/BiMoon';
  import BiSun from 'svelte-icons-pack/bi/BiSun';
  import HiOutlineMenu from 'svelte-icons-pack/hi/HiOutlineMenu';
  import Icon from 'svelte-icons-pack/Icon.svelte';

  import { menuVisibleStore } from '@src/lib/stores/menu.store';
  import { themeStore } from '@src/lib/stores/theme.store';

  const handleMenu = () => {
    menuVisibleStore.update((prev) => !prev);
  };

  const handleTheme = () => {
    themeStore.update((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.cookie = `theme=${$themeStore}`;
  };
</script>

<header
  class={classNames(
    'sticky top-0 z-[20] flex min-h-4 w-full items-center justify-center backdrop-blur-md',
    'shadow-[0_2px_4px_rgba(0,0,0,0.02),0_-1px_0_rgba(0,0,0,0.06)_inset] dark:shadow-[0_-1px_0_rgba(255,255,255,0.1)_inset]',
    'contrast-more:shadow-[0_0_0_1px_#000] dark:contrast-more:shadow-[0_0_0_1px_#fff]'
  )}
>
  <nav class="flex max-w-90 flex-1 items-center justify-between px-[20px]">
    <div class="flex flex-row items-center">
      <button
        class="mr-[8px] items-center justify-center p-[4px] md:hidden"
        on:click={handleMenu}
      >
        <Icon src={HiOutlineMenu} size="24" />
      </button>

      <span class="text-xl font-bold dark:text-white">himitery</span>
    </div>

    <div class="flex flex-row items-center">
      <button
        class="mr-[8px] items-center justify-center p-[4px]"
        on:click={handleTheme}
      >
        {#if $themeStore === 'dark'}
          <Icon src={BiSun} size="24" color="white" />
        {:else}
          <Icon src={BiMoon} size="24" color="black" />
        {/if}
      </button>

      <a href="https://github.com/himitery" target="_blank" rel="noreferrer">
        <div class="mr-[8px] items-center justify-center p-[4px]">
          <Icon
            src={AiFillGithub}
            size="24"
            color={$themeStore === 'dark' ? 'white' : 'black'}
          />
        </div>
      </a>
    </div>
  </nav>
</header>
