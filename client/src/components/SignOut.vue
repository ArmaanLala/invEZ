<template><div></div></template>

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