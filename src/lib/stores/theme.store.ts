import { writable } from 'svelte/store';

export type ThemeType = 'dark' | 'light';

export const themeStore = writable<ThemeType>();
