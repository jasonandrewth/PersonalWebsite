<script>
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
	import website from '$lib/config/website';

	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const { siteLanguage, siteTitle } = website;

	export let description;
	export let title;
	// export let path;

	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
</svelte:head>
