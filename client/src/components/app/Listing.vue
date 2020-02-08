<template>
	<div>
		<h3>{{ listing.name }} ({{ listing.ticker }})</h3>
	</div>
</template>

<script>
export default {
	name: 'Listing',
	props: {
		listing: Object
	}
}
</script>

<style>

</style>