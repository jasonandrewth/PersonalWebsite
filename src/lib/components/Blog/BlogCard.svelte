<script lang="ts">
	export let post;
</script>

<a href={post.path} class="block mb-8 py-4 border-t border-white border-opacity-50">
	<h2 class="item__title text-4xl mb-1">{post.meta.title}</h2>
	<p class="italic text-base mb-2">{post.meta.date}</p>
	<p class="text-xl">
		{post.meta.description ? post.meta.description : ''}
	</p>
</a>
