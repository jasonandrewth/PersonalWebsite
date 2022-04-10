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

<SEO title="Blog" description="My Blog" />
<!-- <h1>Blog</h1>

<p>
	Aliqua mollit cillum cillum aliqua et qui ipsum. Irure eu enim qui fugiat sint eu nulla ullamco ad
	quis Lorem ad incididunt irure. Et nostrud aliquip dolore exercitation quis dolore excepteur ad
	eiusmod. Exercitation non sunt consectetur dolor. Adipisicing excepteur aute excepteur laboris
	dolore consequat ullamco Lorem nostrud sunt minim minim veniam laborum.
</p> -->
<Heading>blog</Heading>

<ul>
	<!-- {#each posts as post}
		<li class="first:border-none mb-8 py-4 border-t border-white border-opacity-50">
			<BlogCard {post} />
		</li>
	{/each} -->
</ul>
