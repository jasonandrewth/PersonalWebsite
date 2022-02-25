<script>
	import { getContext, setContext } from 'svelte';

	import ContactForm from '$lib/components/Form/ContactForm.svelte';
</script>

<div class="w-full top-0 left-0 flex flex-col justify-center items-center text-xl ">
	<h1 class="uppercase mb-6">contact</h1>
	<p class="md:max-w-[50vw]">
		Ad ea pariatur est irure eiusmod. Sunt nulla est amet duis. Adipisicing nisi eu qui ipsum
		reprehenderit laboris adipisicing eiusmod aliqua. Ad ea pariatur est irure eiusmod. Sunt nulla
		est amet duis. Adipisicing nisi eu qui ipsum reprehenderit laboris adipisicing eiusmod aliqua.
	</p>
	<ContactForm contactPage />
</div>
