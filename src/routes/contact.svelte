<script>
	import { getContext, setContext } from 'svelte';
</script>

<div class="w-full top-0 left-0 flex flex-col justify-center items-center text-xl ">
	<h1 class="uppercase mb-6">contact</h1>
	<p class="md:max-w-[50vw]">
		Ad ea pariatur est irure eiusmod. Sunt nulla est amet duis. Adipisicing nisi eu qui ipsum
		reprehenderit laboris adipisicing eiusmod aliqua. Ad ea pariatur est irure eiusmod. Sunt nulla
		est amet duis. Adipisicing nisi eu qui ipsum reprehenderit laboris adipisicing eiusmod aliqua.
	</p>
	<form action="#" class="w-full md:w-3/4 lg:w-3/6 p-4">
		<div class="p-3">
			<input
				class="block appearance-none placeholder-gray-600 placeholder-opacity-100 border w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
				type="text"
				placeholder="Name"
				required
			/>
		</div>
		<div class="p-3">
			<input
				class="block appearance-none placeholder-gray-600 placeholder-opacity-100 border w-full py-2 px-3 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
				type="email"
				placeholder="Email Id"
				required
			/>
		</div>
		<div class="p-3">
			<textarea
				class="resize-none block appearance-none placeholder-gray-600 placeholder-opacity-100 border border-light-blue-400 w-full py-2 px-3 text-gray-900 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
				placeholder="Message"
				required
			/>
		</div>
		<div class="p-3 pt-4">
			<button
				on:click|preventDefault
				class="w-full bg-transparent border transition-all hover:opacity-80 text-white py-2 px-4 text-xl md:text-2xl"
			>
				Send
			</button>
		</div>
	</form>
</div>
