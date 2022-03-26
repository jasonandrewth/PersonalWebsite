<script lang="ts">
	import SEO from '$lib/components/SEO/index.svelte';
	import Heading from '$lib/components/UI/Heading.svelte';
</script>

<SEO title={'About'} description={'about me'} />

<Heading>about</Heading>

<div class="pt-4 text-xl md:max-w-[70vw] prose text-white">
	<p>
		Hi, I'm Jason. As a developer I create applications and interfaces for the web. I like working on more playful / gamified web experiences that might diverge from tested UX patterns. In a more general sense, I enjoy exploring how systems and humans interlink in sometimes unexpected ways through both technology and theory.
	</p>
  <p>
	While I mostly focus on client-side interfaces, interactively visualizing different data sources or even building physical devices in the realm of IoT Design are also fields I'm interested in.
  </p>
  I mainly use modern JavaScript in my work. On the user-facing side I prefer using JavaScript frameworks like ReactJS or Svelte with CSS preprocessors or Tailwind CSS. For more interactive visualizations I use WebGL through Three.js, sometimes writing my own shaders in GLSL. When designing an interface myself, that process mostly takes place in Figma before building it out. On the backend I usually like to implement solutions in a Node.js environment. For IoT projects I like using the Arduino platform or Raspberry Pi.
  <p>
	If you would like to work with me in any of these fields feel free to <a class="text-white inline-block" href="/contact">contact me</a>.
  </p>
</div>
