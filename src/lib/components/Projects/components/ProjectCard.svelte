<script lang="ts">
	import Role from './Role.svelte';
</script>

<div>
	<div class="mb-4">
		<img
			src="https://media.istockphoto.com/photos/hand-chooses-with-happy-smile-face-emoticon-icons-on-wooden-cube-good-picture-id1283822563?b=1&k=20&m=1283822563&s=170667a&w=0&h=8oEZVbSu503x-ATRQgV2NOhi9XHNlvExW3OU2P66cNI="
			alt="pic of sth"
			class="webgl-image max-h-[80vh] min-w-[50vw]"
			height={100}
		/>
	</div>
	<h2 class="item__title mb-2 text-4xl">XYZ Website</h2>
	<p class="text-xl">
		Octopuses sometimes partner with fish to hunt, but the partnership comes with risks (for the
		fish, that is).
	</p>

	<div class="flex mt-4">
		<Role>Development</Role>
		<Role>Design</Role>
	</div>
</div>
