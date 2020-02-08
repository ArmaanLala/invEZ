<template>
	<div>
		<div class ="card">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title"><img src="../assets/Logo.png" height="490" width="490"></div>
				</md-card-header>
			
			<h2>InvEZting made easier</h2>
			<br>
			<br>
			</md-card>
		</div>
		<div class ="card">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">Who We Are</div>
				</md-card-header>
			<hr>
			<p>We are a company focused on introducing people into the investing and our goal is to make it as easy as possible for them. We are a small team of three software engineers all based in the Athens-Clarke County Region.
			</p>
			<br>
			<br>
			</md-card>
		</div>
		<div class ="card">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title"><img src="../assets/Logo.png" height="490" width="490"></div>
				</md-card-header>
			<hr>
			<h2>InvEZting made easier</h2>
			<br>
			<br>
			</md-card>
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
.md-card {
	margin: auto;
	justify-content: center;
	flex-wrap: wrap;
	width: 600px;
	/* height: 600px; */
	/* padding-bottom: 54 rem; */
	/* max-width: 1200px; */
} 
.card {
	padding-bottom: 5rem;
}
</style>