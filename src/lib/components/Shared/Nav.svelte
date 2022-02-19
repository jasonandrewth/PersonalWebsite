<script lang="ts">
	import ExternalLink from '../ExternalLink.svelte';

	export let menuHandler: (e: Event) => void;
</script>

<div class="fixed top-0 left-0 z-20 bottom-0 bg-black">
	<div
		class="w-12 md:w-14 m-0 py-7 text-center float-left h-full border-r-2 flex flex-col items-center justify-between"
	>
		<div class="writing-mode-vertical rotate-180 tracking-wide">
			<a href={'/'}>
				<h3>Jason Thompson</h3>
			</a>
		</div>

		<div
			on:click={menuHandler}
			class="md:hidden p-4 writing-mode-vertical rotate-180 tracking-wide cursor-pointer"
		>
			<h3>Menu</h3>
		</div>

		<div class="flex flex-col p-0 ">
			<ExternalLink classes="py-4" ariaLabel="github" href="https://github.com/jasonandrewth"
				><img src="/github.svg" alt="GitHub Logo" /></ExternalLink
			>

			<ExternalLink ariaLabel="twitter" href="https://twitter.com"
				><img src="/twitter.svg" alt="Twitter Logo" /></ExternalLink
			>
		</div>
	</div>

	<div
		class="hidden w-14 m-0 text-center float-left h-screen border-r-2 md:flex flex-col items-center justify-between"
	>
		<nav class="absolute bottom-0 pb-4 flex items-center">
			<ul class="list-none">
				<li
					class="writing-mode-vertical rotate-180 py-2 max-w-[24px] text-center max-height-[110px] whitespace-nowrap"
				>
					<a href={`/`}>
						<h3>HOME</h3>
					</a>
				</li>
				<li
					class="writing-mode-vertical rotate-180 py-2 max-w-[24px] text-center max-height-[110px] whitespace-nowrap"
				>
					<a href="/blog">
						<h3>BLOG</h3>
					</a>
				</li>
				<li
					class="writing-mode-vertical rotate-180 py-2 max-w-(24px) text-center max-height-(110px) whitespace-nowrap"
				>
					<a href="/about">
						<h3>CONTACT</h3>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
