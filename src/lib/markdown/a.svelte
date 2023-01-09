<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import FiLink from 'svelte-icons-pack/fi/FiLink';

  export let href: string;
</script>

<a
  class="flex-inline h-min flex-row items-center py-0 text-primary/90 no-underline shadow-[0_1px_0_0] shadow-primary"
  href={href}
>
  <slot />

  <Icon src={FiLink} className="inline-flex" size="14" />
</a>
