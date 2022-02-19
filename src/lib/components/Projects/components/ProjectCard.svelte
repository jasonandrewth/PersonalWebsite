<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';

	import Pill from './Pill.svelte';

	export let title: string;

	let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
	<div class="project-wrapper" bind:this={node}>
		{#if intersecting}
			<div class="project lg:flex" transition:fade={{ delay: 200 }}>
				<div class="mb-4">
					<img
						src="https://media.istockphoto.com/photos/hand-chooses-with-happy-smile-face-emoticon-icons-on-wooden-cube-good-picture-id1283822563?b=1&k=20&m=1283822563&s=170667a&w=0&h=8oEZVbSu503x-ATRQgV2NOhi9XHNlvExW3OU2P66cNI="
						alt="pic of sth"
						class="webgl-image h-full max-h-[80vh] min-w-[45vw] lg:max-w-[50vw]"
						height={100}
					/>
				</div>
				<section class="lg:px-8 lg:py-4 lg:flex flex-col justify-between">
					<div>
						<h2 class="item__title mb-2 text-4xl uppercase">{title || 'PROJECT'}</h2>
						<p class="text-xl mb-4">
							Octopuses sometimes partner with fish to hunt, but the partnership comes with risks
							(for the fish, that is).
						</p>
					</div>

					<div class="">
						<p class="text-xl">Role:</p>
						<div class="flex mt-2 mb-4">
							<Pill>Development</Pill>
							<Pill>Design</Pill>
						</div>
						<p class="text-xl">Tech:</p>
						<div class="flex mt-2 mb-4">
							<Pill>Next.js</Pill>
							<Pill>Contentful CMS</Pill>
							<Pill>Three.js</Pill>
						</div>
					</div>
				</section>
			</div>
		{/if}
	</div>
</IntersectionObserver>

<style lang="scss">
	.project-wrapper {
		&:nth-of-type(even) {
			.project {
				flex-direction: row-reverse;
				section {
					padding-left: 0;
				}
			}
		}
	}
</style>
