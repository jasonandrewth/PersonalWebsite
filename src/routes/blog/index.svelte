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

<h1>Blog</h1>

<p>
	Aliqua mollit cillum cillum aliqua et qui ipsum. Irure eu enim qui fugiat sint eu nulla ullamco ad
	quis Lorem ad incididunt irure. Et nostrud aliquip dolore exercitation quis dolore excepteur ad
	eiusmod. Exercitation non sunt consectetur dolor. Adipisicing excepteur aute excepteur laboris
	dolore consequat ullamco Lorem nostrud sunt minim minim veniam laborum.
</p>

<ul>
	{#each posts as post}
		<li class="first:border-none mb-8 py-4 border-t border-white border-opacity-50">
			<BlogCard {post} />
		</li>
	{/each}
</ul>
