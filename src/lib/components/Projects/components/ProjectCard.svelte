<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';

	import Pill from './Pill.svelte';

	export let title: string;
	export let img: string;

	let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
	<div class="project-wrapper" bind:this={node}>
		<div class="project lg:flex" transition:fade={{ delay: 200 }}>
			<div class="mb-4">
				<img
					src={img}
					alt="pic of sth"
					class="webgl-image h-[50vh] w-full md:w-[50vw] md:min-w-[40vw] object-cover"
				/>
			</div>
			<section class="lg:px-8 lg:py-4 lg:flex flex-col justify-between">
				<div>
					<h2 class="item__title mb-2 text-4xl uppercase">{title || 'PROJECT'}</h2>
					<p class="text-xl m-0 mb-4">
						Octopuses sometimes partner with fish to hunt, but the partnership comes with risks (for
						the fish, that is). Octopuses sometimes partner with fish to hunt, but the partnership
						comes with risks (for the fish, that is). Octopuses sometimes partner with fish to hunt,
						but the partnership comes with risks (for the fish, that is).
					</p>
					<div class="text-xl m-0 mb-4">
						<span>Visit</span>
						<span>Code</span>
					</div>
				</div>

				<div class="">
					<p class="text-xl m-0">Role:</p>
					<div class="flex mt-2 mb-4">
						<Pill>Development</Pill>
						<Pill>Design</Pill>
					</div>
					<p class="text-xl m-0">Tech:</p>
					<div class="flex mt-2 mb-4">
						<Pill>Next.js</Pill>
						<Pill>Contentful CMS</Pill>
						<Pill>Three.js</Pill>
					</div>
				</div>
			</section>
		</div>
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
