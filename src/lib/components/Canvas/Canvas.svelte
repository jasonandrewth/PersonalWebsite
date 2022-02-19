<script lang="ts">
	import * as THREE from 'three';

	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		let renderer;
		renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
		scene.add(cube);
		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		};

		const resize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		resize();
		animate();

		return () => {
			console.log('canvas unmount');
		};
	});
</script>

<canvas class="absolute top-0 left-0 outline-none w-screen h-screen" bind:this={canvas} />
