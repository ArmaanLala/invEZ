<template>
	<div v-if="loading">
		Loading...
		<!-- TODO: have an animation here -->
	</div>
	<section v-else>
		<h1>Main</h1>
		<ol>
			<li v-for="listing in listings" :key="listing.ticker">
				<Listing :listing="listing" />
			</li>
		</ol>
	</section>
</template>

<script>
import Listing from './Listing'

export default {
	name: 'Main',
	components: { Listing },
	data() {
		return {
			isLoading: true,
			listings: null
		}
	},
	async created() {
		// TODO: get listings based on user from BlackRock API
		const resp = await fetch('/api/blackrock/test');
		const data = await resp.json();
		this.listings = data;
	}
}
</script>

<style scoped>
ol {
	list-style: none;
}
</style>