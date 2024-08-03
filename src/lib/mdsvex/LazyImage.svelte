<script lang="ts">
	// Custom component that adds extra attributes to the <img> tags from mdsvex
	// https://joyofcode.xyz/sveltekit-markdown-blog#using-components-inside-markdown
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} loading="lazy" />
