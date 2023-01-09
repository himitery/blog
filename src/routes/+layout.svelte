<script lang="ts">
  import '@lib/markdown/markdown.css';
  import '@routes/styles.css';
  import 'prism-themes/themes/prism-one-dark.css';

  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  import Header from '@components/layout/Header.svelte';
  import SideBar from '@src/lib/components/layout/SideBar.svelte';
  import ToC from '@src/lib/components/layout/ToC.svelte';
  import { themeStore } from '@src/lib/stores/theme.store';

  export let data: PageData;

  onMount(() => {
    themeStore.set(data.theme === 'dark' ? 'dark' : 'light');
  });
</script>

{#if $themeStore !== undefined}
  <div class={$themeStore === 'dark' ? 'dark' : ''}>
    <div
      class={classNames(
        'flex flex-1 flex-col items-center',
        'text-gray dark:text-white',
        'bg-white dark:bg-black'
      )}
    >
      <Header />

      <main class="flex w-full max-w-90 flex-row">
        <SideBar path={data.posts} />

        <article
          class="prose prose-base flex min-h-[calc(100vh-4rem)] max-w-none flex-1 flex-col px-[32px] pt-[16px] pb-4 dark:prose-invert"
        >
          <slot />
        </article>

        <ToC />
      </main>
    </div>
  </div>
{/if}
