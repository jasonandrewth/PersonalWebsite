<script lang="ts">
	export let contactPage: boolean;
</script>

<form action="#" class={contactPage ? 'w-full md:w-3/4 lg:w-3/6' : 'w-full md:p-4 md:m-auto'}>
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
