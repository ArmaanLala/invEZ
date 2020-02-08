<template><div></div></template>

<script>
export default {
	name: 'Logout',
	async beforeCreated() {
		const resp = await fetch('/api/users/logout', { method: 'POST' });
		console.log(resp.status)
		this.$router.push('/signin');
	}
}
</script>

<style></style>