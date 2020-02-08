<template>
	<h1>Signing you out...</h1>
</template>

<script>
export default {
	name: 'SignOut',
	async beforeCreate() {
		await fetch('/api/users/signout', { method: 'POST' });
		this.$router.push('/signin');
	}
}
</script>

<style></style>