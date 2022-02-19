<script lang="ts">
	import Intro from '$lib/components/Intro/Intro.svelte';
	import ProjectGrid from '$lib/components/Projects/ProjectGrid.svelte';
	import ProjectCard from '$lib/components/Projects/components/ProjectCard.svelte';

	let text = "Hi I'm Jason, a developer specializing in web technologies based in Berlin, Germany.";
</script>

<svelte:head>
	<title>Portfolio Home</title>
</svelte:head>

<Intro {text} />
<ProjectGrid>
	<ProjectCard title="17Lps" />
	<ProjectCard title="Kiss Me I'm Famous" />
	<ProjectCard title="World Ataraxia" />
</ProjectGrid>
