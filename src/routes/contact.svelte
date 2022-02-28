<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';

	import ContactForm from '$lib/components/Form/ContactForm.svelte';
</script>

<SEO title={'Contact'} description={'contact me here'} />
<section class="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
	<div class="pt-4 text-xl">
		<p>
			I’m interested in freelance opportunities – especially ambitious or large projects. However,
			if you have other request or question, don’t hesitate to use the form.
		</p>
	</div>
	<ContactForm contactPage={false} />
</section>
