<template>
	<md-card class="md-layout-item md-size-50 md-small-size-75 md-alignment-center-center">
		<md-card-header>
			<h3 class="md-title">{{ listing.name }} ({{ listing.ticker }}) [{{ listing.category }}]</h3>
		</md-card-header>
		<md-card-content>
			<canvas></canvas>
		</md-card-content>
	</md-card>
</template>

<script>
export default {
	name: 'Listing',
	props: {
		listing: Object
	},
	async created() {
		try {
			const resp = await fetch(`/api/blackrock/${this.listing.ticker}/3`);
			const data = await resp.json();
			console.log(data)
		} catch (err) {
			console.error(err.message);
		}
	}
}
</script>

<style scoped>

</style>