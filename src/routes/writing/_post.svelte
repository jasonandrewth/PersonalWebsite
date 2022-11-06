<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	export let title;
	export let date;
	export let description;
	// export let path;

	const dater = new Date(date)?.toLocaleString('en-GB', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
</script>

<SEO {title} {description} />
<article class="relative md:px-4 mx-auto max-w-4xl">
	<header class="mb-16">
		<h1 class="text-3xl md:text-4xl tracking-wide text-center uppercase mb-4">{title}</h1>

		<p class="text-xl text-red text-center italic">Published: {dater}</p>
	</header>

	<section class="prose-xl lg:prose-xl dark:prose-invert">
		<slot />
	</section>
</article>

<style lang="scss">
	p {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
</style>
