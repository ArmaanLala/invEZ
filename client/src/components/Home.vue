<template>
	<div>
		<div class="logo-board">
			<img src="../assets/Logo.png" height="490" width="490">
			<h2>Investing made easier</h2>
		</div>
	</div>
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

<style scoped>
.logo-board{
	background-color: silver;
	height: 200px;
	padding: 2px;
} 
</style>