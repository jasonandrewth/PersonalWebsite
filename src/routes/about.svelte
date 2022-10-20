<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';

	import Pill from '$lib/components/Projects/components/Pill.svelte';
</script>

<SEO
	title={'About'}
	description={'Hi, Im Jason. As a developer I create applications and interfaces for the web. I like working on more playful / gamified web experiences that might diverge from tested UX patterns. In a more general sense, I enjoy exploring how systems and humans interact in sometimes unexpected ways through both technology and theory.'}
/>

<Heading>about</Heading>

<div class="pt-4 md:max-w-[70vw] prose-xl lg:prose-2xl">
	<p>
		As a web developer I create component-driven interfaces. I especially like working on more
		playful / gamified web experiences that might diverge from tested UX patterns. In a more general
		sense, I enjoy exploring how systems and humans interact in sometimes unexpected ways through
		technology and theory.
	</p>
	<p>
		While I mostly focus on client-side interfaces, interactively visualizing different data sources
		or even building physical devices in the realm of IoT Design are also things I'm interested in.
	</p>
	<!-- I mainly use modern JavaScript in my work. On the user-facing side I prefer using JavaScript frameworks
	like<strong>ReactJS</strong> or <strong>Svelte</strong> with CSS preprocessors or Tailwind CSS.
	For more interactive experiences I use WebGL through <strong>Three.js</strong>, sometimes writing
	my own shaders in <strong>GLSL</strong>. When designing a user interface myself, that process
	mostly takes place in <strong>Figma</strong> before building it out. On the backend I usually like
	to implement solutions in a <strong>Node.js</strong> environment. For IoT projects I like using
	the
	<strong>Arduino</strong>
	platform or <strong>Raspberry Pi</strong>. -->
	<p>
		I'm interested in freelance opportunities and collaborations in almost any field where my skills
		can be of use. However, if you have other request or questions, contact me via the email
		provided in the footer.
	</p>

	<h2 class="mt-0 mb-4 !text-2xl font-medium">Tech I Like To Use:</h2>
	<div class="w-full flex flex-wrap gap-2 mt-2 mb-4 uppercase font-bold">
		<Pill>React</Pill>
		<Pill>Svelte</Pill>
		<Pill>THREE.JS</Pill>
		<Pill>GLSL</Pill>
		<Pill>Typescript</Pill>
		<Pill>Node.js</Pill>
		<Pill>Figma</Pill>
		<Pill>Arduino</Pill>
		<Pill>Prisma</Pill>
		<Pill>Webpack</Pill>
		<Pill>postgresql</Pill>
		<Pill>Raspberry Pi</Pill>
		<Pill>SymPy</Pill>
		<Pill>Jupyter notebook</Pill>
	</div>
</div>
