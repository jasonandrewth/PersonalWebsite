<footer
	class="w-full mt-32 border border-white grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-6 2xl:grid-cols-10 uppercase text-base md:text-xl"
>
	<div
		class="p-4 md:p-0 border-b border-r flex items-center justify-center md:border-b-0 md:row-span-2"
	>
		<img src="/jason6logo.svg" alt="GitHub Logo" class="logo max-h-16" />
	</div>
	<div
		class="p-4 row-start-2 md:row-start-1 md:col-start-2 col-span-2 md:border-r border-b md:col-span-4"
	>
		Mail: jasonxandrewth@gmail.com
	</div>
	<div class="p-4 row-start-3 md:row-start-2 border-r col-span-4 md:col-start-2">
		Website built with SvelteKit. View the code here
	</div>
	<!-- <div class="p-4 col-span-1 row-span-1">Website built with SvelteKit. View the code here</div> -->
	<div
		class="col-start-2 md:row-start-2 md:col-start-6 border-b md:border-t md:border-b-0 flex justify-center items-center uppercase"
	>
		<a href="/legal"> Legal </a>
	</div>
</footer>

<style lang="scss">
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
	.logo {
		animation: spin 24s infinite linear;

		&:hover {
			animation-play-state: paused;
		}
	}
</style>
