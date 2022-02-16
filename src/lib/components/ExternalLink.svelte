<script>
	export let rel = 'nofollow noopener noreferrer';
	export let target = '_blank';
	export let href;
	export let ariaLabel;
	export let classes = '';
</script>

<a class={classes} aria-label={ariaLabel} {href} {rel} {target}><slot /></a>
