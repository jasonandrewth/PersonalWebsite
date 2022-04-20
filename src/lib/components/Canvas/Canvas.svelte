<script lang="ts">
	import * as THREE from 'three';
	import glslify from 'glslify';

	import { onMount } from 'svelte';

	let canvas: HTMLDivElement;

	onMount(() => {
		/**
		 * Sizes
		 */
		const sizes = {
			width: canvas.offsetWidth / 2,
			height: canvas.offsetHeight
		};

		const scene = new THREE.Scene();
		// Change Background Color
		// scene.background = new THREE.Color(0xff0000);
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

		const material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
			transparent: true,
			extensions: {
				derivatives: true
			},
			uniforms: {
				time: { value: 0 },
				density: { value: 1.0 }
			},
			vertexShader: /*glsl*/ `
      varying vec3 vPosition;
      void main () {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,
			fragmentShader: glslify(/* glsl */ `
      precision highp float;
      varying vec3 vPosition;
      uniform float time;
      uniform float density;
      #pragma glslify: noise = require(glsl-noise/simplex/4d);
      #define PI 3.141592653589793
      float patternZebra(float v){
        float d = 1.0 / density;
        float s = -cos(v / d * PI * 2.);
        return smoothstep(.0, .1 * d, .1 * s / fwidth(s));
      }
      void main () {
        float frequency = .6;
        float amplitude = 1.5;
        float noiseValue = noise(vec4(vPosition * frequency, sin(PI * time))) * amplitude;
        float t = patternZebra(noiseValue);
        vec3 fragColor = mix(vec3(1.,0.4,0.369), vec3(0.824,0.318,0.369), t);
        gl_FragColor = vec4(fragColor, 1.);
      }
      `)
		});

		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(sizes.width, sizes.height, true);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		const quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2, 1, 1), material);
		scene.add(quad);

		scene.add(camera);

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		const animate = () => {
			const elapsedTime: number = clock.getElapsedTime();
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};

		const resize = () => {
			// Update sizes
			sizes.width = canvas.offsetWidth;
			sizes.height = canvas.offsetHeight;
			// Update camera
			// camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener('resize', () => {
			resize();
		});

		/**
		 * Setup
		 */
		canvas.appendChild(renderer.domElement);

		resize();
		animate();

		return () => {
			console.log('canvas unmount');
			// quad.dispose();
			material.dispose();
			canvas.removeChild(renderer.domElement);
		};
	});
</script>

<div class="absolute top-0 left-0 outline-none w-full h-full" bind:this={canvas} />
