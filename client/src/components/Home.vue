<template>
	<img src="../assets/Logo.png">
</template>

<script>
export default {
	name: 'Home',
	async created() {
		const resp = await fetch('/api/test');
		const data = await resp.text();
		console.log(data);
	}
}
</script>

<style>

</style>