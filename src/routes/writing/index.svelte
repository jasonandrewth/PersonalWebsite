<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	// Before content is loaded
	export const load: Load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script lang="ts">
	// This is the "normal" client-side script
	import SEO from '$lib/components/SEO/index.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	export let posts;
</script>

<SEO title="Writing" description="Articles on tech and other topics" />

<Heading>writing</Heading>

<ul>
	{#each posts as post}
		<li class="first:border-none mb-8 py-4 border-t border-white border-opacity-50">
			<BlogCard {post} />
		</li>
	{/each}
</ul>
