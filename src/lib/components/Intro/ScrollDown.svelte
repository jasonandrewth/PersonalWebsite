<script lang="ts">
	import { onMount } from 'svelte';

	let target: HTMLElement;

	onMount(() => {
		target = document.getElementById('projects');
	});

	const clickHandler = () => {
		target.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<button
	on:click={clickHandler}
	class="hidden md:flex z-10 p-4 absolute bottom-16 left-1/2 -translate-x-1/2 justify-center items-center border border-white rounded-full"
>
	^
</button>
