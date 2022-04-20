<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';
</script>

<SEO
	title={'About'}
	description={'Hi, Im Jason. As a developer I create applications and interfaces for the web. I like working on more playful / gamified web experiences that might diverge from tested UX patterns. In a more general sense, I enjoy exploring how systems and humans interact in sometimes unexpected ways through both technology and theory.'}
/>

<Heading>about</Heading>

<div class="pt-4 md:max-w-[70vw] prose-xl lg:prose-2xl text-white">
	<p>
		As a web developer I create component-driven interfaces. I especially like working on more
		playful / gamified web experiences that might diverge from tested UX patterns. In a more general
		sense, I enjoy exploring how systems and humans interact in sometimes unexpected ways through
		technology and theory.
	</p>
	<p>
		While I mostly focus on client-side interfaces, interactively visualizing different data sources
		or even building physical devices in the realm of IoT Design, i.e with the
		<strong>Arduino</strong>
		platform or <strong>Raspberry Pi</strong>, are also fields I'm interested in.
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
		If you would like to work with me in any of these fields feel free to <a
			class="text-white inline-block"
			href="/contact">contact me</a
		>.
	</p>
</div>

<style>
	strong {
		@apply text-white;
	}
</style>
