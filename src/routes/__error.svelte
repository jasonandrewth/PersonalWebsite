<script context="module" lang="ts">
	export async function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	import { dev } from '$app/env';
	import SEO from '$lib/components/SEO/index.svelte';
	export let status;
	export let error;
</script>

<SEO title={status} description />

<div>
	<h1>{status}</h1>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
</style>
