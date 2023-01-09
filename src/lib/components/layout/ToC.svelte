<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import classNames from 'classnames';

  let current: Element;
  let contents: { element: Element; intersection: boolean }[] = [];

  afterNavigate(() => {
    contents = Array.from(document.querySelectorAll('h2, h3')).map(
      (element) => ({
        element,
        intersection: false,
      })
    );

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            contents = contents.map((element) =>
              element.element.isSameNode(entry.target)
                ? { ...element, intersection: entry.isIntersecting }
                : element
            );

            const target = contents.find((content) => content.intersection);
            if (target !== undefined) {
              current = target.element;
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: '-64px 0px',
        }
      );

      contents.map((content) => observer.observe(content.element));
      return () => {
        contents.map((content) => observer.unobserve(content.element));
      };
    }
  });

  const handleScroll = (index: number) => {
    return () => {
      window.scrollTo({
        behavior: 'smooth',
        top:
          contents[index].element.getBoundingClientRect().top +
          window.pageYOffset -
          64,
      });
    };
  };
</script>

<aside
  class={classNames(
    'w-[16rem] min-w-0 max-w-0 opacity-0 lg:min-w-[16rem] lg:max-w-[16rem] lg:opacity-100',
    'transition-all duration-500 ease-in-out lg:duration-1000',
    'overflow-hidden'
  )}
>
  <ul class="sticky top-[4rem] flex h-[calc(100vh-4rem)] w-full flex-col py-16">
    {#if contents !== undefined}
      {#each contents as content, index}
        <li
          class={classNames(
            'flex w-full cursor-pointer py-[4px]',
            content.element.nodeName === 'H2' ? 'px-16' : 'px-[2rem]'
          )}
        >
          <button
            class={classNames(
              'min-w-[16rem] text-start text-gray-500 hover:text-gray-900 contrast-more:text-gray-900 hover:dark:text-gray-300',
              content.element.nodeName === 'H2'
                ? 'font-semibold'
                : 'font-light',
              content.element.isSameNode(current)
                ? 'font-bold text-primary'
                : ''
            )}
            on:click={handleScroll(index)}
          >
            {content.element.textContent}
          </button>
        </li>
      {/each}
    {/if}
  </ul>
</aside>
