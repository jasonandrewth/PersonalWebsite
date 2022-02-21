<script lang="ts">
	export let text: string;

	import ScrollDown from './ScrollDown.svelte';
</script>

<section class="w-full h-[50vh] mb-[20vh] md:mb-[50vh]">
	<div class="titleWrapper text-5xl md:text-6xl lg:text-8xl">
		<span>{text}</span>
	</div>
</section>

<ScrollDown />
