import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { join } from 'path';

/** @type {import('mdsvex').MdsvexOptions} */
const markdownOptions = {
	extensions: ['.md'],
	layout: {
		// _: join(import.meta.dirname, './src/lib/mdsvex/mdsvex.svelte')
		_: './src/lib/mdsvex/mdsvex.svelte'
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors

	preprocess: [
		vitePreprocess(),
		mdsvex(markdownOptions)
	],

    kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

    extensions: [".svelte", ".md"]
};

export default config;
