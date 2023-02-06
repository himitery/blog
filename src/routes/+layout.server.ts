import { PathStructure } from '@src/lib/model/path-structure';
import type { LayoutServerLoad } from './$types';

export const load = (() => {
  const modules = import.meta.glob('@routes/**/*.svx');

  return {
    posts: PathStructure.of(
      Object.keys(modules)
        .map((module) =>
          module.replace('/src/routes', '').replace('/+page.svx', '')
        )
        .filter((module) => module.length !== 0)
    ).value(),
  };
}) satisfies LayoutServerLoad;
