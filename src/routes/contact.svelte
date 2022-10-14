<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';

	import ContactForm from '$lib/components/Form/ContactForm.svelte';
</script>

<SEO title={'Contact'} description={'Contact me here'} />

<Heading>contact</Heading>

<section class="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
	<div class="pt-4 text-xl lg:text-2xl mb-2">
		<p>
			I'm interested in freelance opportunities and collaborations in almost any field where my
			skills can be of use. However, if you have other request or questions, don't hesitate to use
			the form.
		</p>
	</div>
	<!-- <ContactForm contactPage={false} /> -->
</section>
