<template>
	<div class="navDiv">
		<md-app>
			<md-app-toolbar class="test">
				<span class="md-title">
					<router-link to="/">
						<img src="../assets/logo2.png" height="120" width="120" />
					</router-link>
				</span>
				<nav>
					<div v-if="isAuthenticated">
						<router-link to="/app">
							<md-button>App</md-button>
						</router-link>
						<router-link to="/signout">
							<md-button>Sign Out</md-button>
						</router-link>
					</div>
					<div v-else class="timb">
						<router-link to="/signin">
							<md-button>Sign In</md-button>
						</router-link>
						<router-link to="/signup">
							<md-button>Sign Up</md-button>
						</router-link>
					</div>
				</nav>
			</md-app-toolbar>
		</md-app>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			isAuthenticated: false
		}
	},
	watch: {
		async $route() {
			const resp = await fetch('api/users/isauthenticated');
			const data = await resp.json();
			this.isAuthenticated = data.isSignedIn;
		}
	}
};
</script>

<style lang="scss">
.test {
	width: 100vw;
	z-index:100;
	position: static;
}
.timb {
	background-color: lightgray;
}
.navDiv {
	padding-bottom: 2rem;
}
.md-app-toolbar {
	display: flex;
	justify-content: space-between;
	color: red;
}
.md-app {
	top: 0;
	position: fixed;
	max-height: 400px;
	border: 1px solid rgba(#000, 0.12);
}
nav {
	/* display: flex; */
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
	"default",
	(
		primary: #3fffbe,
		// The primary color of your application
			accent: #3fffbe // The accent or secondary color
	)
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>