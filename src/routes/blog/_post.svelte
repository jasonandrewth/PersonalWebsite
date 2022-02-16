<script lang="ts">
	export let title;
	export let date;

	const dater = new Date(date)?.toLocaleString();
</script>

<article class="relative md:px-4 mx-auto max-w-4xl">
	<header class="mb-16">
		<h1 class="text-4xl md:text-5xl tracking-wide text-center uppercase mb-4">{title}</h1>

		<p class="text-xl text-red text-center italic">Published: {dater}</p>
	</header>

	<section>
		<slot />
	</section>
</article>
