<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import { page, navigating } from '$app/stores';
	import { loading } from '$lib/loading';

	// import '../app.css';
	import 'prism-themes/themes/prism-dracula.css';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';

	import TipJar from '$lib/components/TipJar/TipJar.svelte';
	import Nav from '$lib/components/Shared/Nav.svelte';
	import Menu from '$lib/components/Shared/Menu.svelte';
	import Footer from '$lib/components/Shared/Footer.svelte';
	import Loading from '$lib/components/Shared/Loading.svelte';
	import Canvas from '$lib/components/Canvas/Canvas.svelte';

	export let currentRoute;

	let menuOpen = false;

	let dark = true;

	const menuHandler = (e: Event) => {
		e.preventDefault;
		menuOpen = !menuOpen;
	};

	//always false when route changes
	$: (menuOpen = false), $page;
	//always add noscroll to body when menu is open
	$: if (browser) document.body.classList.toggle('noscroll', menuOpen);
	//reactive statement, loading true when navigating is true
	$: $loading = !!$navigating;
</script>

<div class:dark>
	<!-- __layout.svelte -->
	<Nav {menuHandler} bind:dark />
	<!-- <TipJar /> -->
	{#key currentRoute}
		<main
			class="text-black dark:text-white bg-white dark:bg-black ml-12 md:ml-28 min-h-screen p-4 md:p-8 max-w-screen md:max-w-[90vw] mx-auto my-0 relative"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
		>
			<!-- //canvas -->
			<!-- <Canvas /> -->
			<Loading />
			<slot />

			<Menu {menuOpen} {menuHandler} />
			<Footer />
		</main>
	{/key}
</div>
