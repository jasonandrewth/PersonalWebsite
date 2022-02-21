<script>
	import { onMount } from 'svelte';

	const clickHandler = () => {
		console.log('clicked');
	};
</script>

<button
	on:click={clickHandler}
	class="hidden md:flex z-10 p-4 bg-white absolute top-[84vh] left-1/2 -translate-x-1/2 justify-center items-center text-red-600"
>
	scroll me
</button>
