<script lang="ts">
  import classNames from 'classnames';
  import Icon from 'svelte-icons-pack';
  import RiSystemArrowRightSLine from 'svelte-icons-pack/ri/RiSystemArrowRightSLine';

  export let label: string;
  export let selected = false;
  export let click: () => void = () => {};
  export let hasOpen = false;
  export let isOpen = false;
  export let open: () => void = () => {};

  const handleClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      click();
    }
  };

  const handleOpen = () => {
    open();
  };
</script>

<button
  class={classNames(
    'my-[2px] flex w-full flex-1 items-center justify-between rounded border-0 px-[10px] py-[8px]',
    selected ? 'bg-primary/10' : 'hover:bg-gray-100 dark:hover:bg-hover'
  )}
  on:click={handleClick}
>
  <span
    class={classNames(
      'font-thick text-start text-sm font-light',
      selected
        ? 'font-semibold text-primary'
        : 'text-gray-900 dark:text-neutral-500'
    )}
  >
    {label}
  </span>

  {#if hasOpen}
    <button
      class={classNames(
        'p-[4px] hover:rounded hover:bg-gray-200 dark:hover:bg-neutral-800',
        selected ? 'hover:bg-primary/20' : ''
      )}
      on:click={handleOpen}
    >
      <Icon
        className={classNames(
          'transition-all duration-200 ease-in-out',
          isOpen ? 'rotate-90' : 'rotate-0'
        )}
        src={RiSystemArrowRightSLine}
        size="16"
        color={selected ? '#ee8432' : 'grey'}
      />
    </button>
  {/if}
</button>
