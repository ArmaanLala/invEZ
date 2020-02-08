<template><div></div></template>

<script>
export default {
	name: 'SignOut',
	async beforeCreate() {
		const resp = await fetch('/api/users/signout', { method: 'POST' });
		console.log(resp.status)
		this.$router.push('/signin');
	}
}
</script>

<style></style>