<script lang="ts">
	import Intro from '$lib/components/Intro/Intro.svelte';
	import ProjectGrid from '$lib/components/Projects/ProjectGrid.svelte';
	import ProjectCard from '$lib/components/Projects/ProjectCard.svelte';

	let text = "Hi I'm Jason, a developer specializing in web technologies based in Berlin, Germany.";

	import ContactForm from '$lib/components/Form/ContactForm.svelte';
</script>

<svelte:head>
	<title>Portfolio Home</title>
</svelte:head>

<Intro {text} />
<ProjectGrid>
	<ProjectCard
		title="17Lps"
		img="https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?s=612x612"
	/>
	<ProjectCard
		title="Kiss Me I'm Famous"
		img="https://media.istockphoto.com/photos/hand-chooses-with-happy-smile-face-emoticon-icons-on-wooden-cube-good-picture-id1283822563?b=1&k=20&m=1283822563&s=170667a&w=0&h=8oEZVbSu503x-ATRQgV2NOhi9XHNlvExW3OU2P66cNI="
	/>
	<ProjectCard title="World Ataraxia" img="/Grapevine.png" />
</ProjectGrid>

<h1 class="titleWrapper text-4xl mt-8 mb-8 text-center uppercase">contact</h1>

<section id="contact" class="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
	<div class="pt-4 text-xl">
		<p>
			I’m interested in freelance opportunities – especially ambitious or large projects. However,
			if you have other request or question, don’t hesitate to use the form.
		</p>
	</div>
	<ContactForm contactPage={false} />
</section>
