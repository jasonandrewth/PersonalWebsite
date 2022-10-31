<script lang="ts">
	export let rel = 'nofollow noopener noreferrer';
	export let target = '_blank';
	export let href: string;
	export let ariaLabel;
	export let classes = 'italic hover:text-red-600';
</script>

<a class={classes} aria-label={ariaLabel} {href} {rel} {target}><slot /></a>
