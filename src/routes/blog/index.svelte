<script context="module" lang="ts">
	// Before content is loaded
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	// This is the "normal" client-side script
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	export let posts;
</script>

<ul>
	{#each posts as post}
		<li>
			<BlogCard {post} />
		</li>
	{/each}
</ul>
