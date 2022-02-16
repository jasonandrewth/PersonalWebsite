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
	<ProjectCard />
	<ProjectCard />
	<ProjectCard />
</ProjectGrid>
