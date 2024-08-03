<script lang="ts" context="module">
	// Layout for markdown pages. Allows replacement for regular tags:
	// See https://joyofcode.xyz/sveltekit-markdown-blog#using-components-inside-markdown

	import img from '$lib/mdsvex/LazyImage.svelte';

	// Exports need to use the same name as the tag to replace
	export { img };
</script>

<slot />
