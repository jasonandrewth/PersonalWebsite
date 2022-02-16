<script context="module" lang="ts">
	export const load = ({ url }) => {
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
	import { page } from '$app/stores';

	// import '../app.css';
	import 'prism-themes/themes/prism-dracula.css';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';

	import TipJar from '../lib/components/TipJar/TipJar.svelte';
	import Nav from '../lib/components/Shared/Nav.svelte';
	import Menu from '$lib/components/Shared/Menu.svelte';

	export let currentRoute;

	let menuOpen = false;

	const menuHandler = (e: Event) => {
		e.preventDefault;
		menuOpen = !menuOpen;
	};

	$: (menuOpen = false), $page;
	$: if (browser) document.body.classList.toggle('noscroll', menuOpen);
</script>

<!-- __layout.svelte -->
<Nav {menuHandler} />
{#key currentRoute}
	<main
		class=" ml-12 md:ml-28 p-4 md:p-8 max-w-screen md:max-w-[90vw] mx-auto my-0 relative"
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
	>
		<slot />

		<Menu {menuOpen} {menuHandler} />
	</main>
{/key}

<!-- <TipJar /> -->
