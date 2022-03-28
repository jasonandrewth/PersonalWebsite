<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Intro from '$lib/components/Intro/Intro.svelte';
	import ProjectGrid from '$lib/components/Projects/ProjectGrid.svelte';
	import ProjectCard from '$lib/components/Projects/ProjectCard.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';

	//Import projects
	import projects from '$lib/data/projects.json';

	let text = "Hi I'm Jason, a web developer based in Berlin, Germany.";

	import ContactForm from '$lib/components/Form/ContactForm.svelte';
</script>

<SEO title={'Home'} description={'Web developer based in Berlin'} />

<Intro {text} />

{#if projects.length > 0}
<ProjectGrid>
	{#each projects as { image, title, description, link, roles, tech }, index}
	<ProjectCard
	title={title}
	img={image}
	description={description}
	activeLink={link}
	roles={roles}
	tech={tech}
    />
    {/each}

</ProjectGrid>
{/if}

<Heading>contact</Heading>

<section id="contact" class="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
	<div class="pt-4 text-xl lg:text-2xl mb-2">
		<p>
			I'm interested in freelance opportunities and collaborations in almost any field where my skills can be of use. However,
			if you have other request or questions, don't hesitate to use the form.
		</p>
	</div>
	<ContactForm contactPage={false} />
</section>
