<script>
	import { getContext, setContext } from 'svelte';
</script>

<div class="w-full top-0 left-0 flex flex-col justify-center items-center">
	<p>
		Ad ea pariatur est irure eiusmod. Sunt nulla est amet duis. Adipisicing nisi eu qui ipsum
		reprehenderit laboris adipisicing eiusmod aliqua. Ad ea pariatur est irure eiusmod. Sunt nulla
		est amet duis. Adipisicing nisi eu qui ipsum reprehenderit laboris adipisicing eiusmod aliqua.
	</p>
	<form action="#" class="w-full md:w-3/4 lg:w-3/6 p-4">
		<div class="p-3">
			<input
				class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
				type="text"
				placeholder="Name"
				required
			/>
		</div>
		<div class="p-3">
			<input
				class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
				type="email"
				placeholder="Email Id"
				required
			/>
		</div>
		<div class="p-3">
			<textarea
				class="resize-none border block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
				placeholder="Message"
				required
			/>
		</div>
		<div class="p-3 pt-4">
			<button
				on:click|preventDefault
				class="w-full bg-transparent border transition-all hover:border-red-600 text-white font-bold py-3 px-4 text-2xl"
			>
				Send
			</button>
		</div>
	</form>
</div>
