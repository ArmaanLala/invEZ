import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

// const isAuthenticated = async () => {
// 	const resp = await fetch('api/users/isauthenticated');
// 	const data = await resp.json();
// 	return data.isSignedIn;
// };

// const checkAuthenticated = async (to, from, next) => {
// 	if (await isAuthenticated()) {

// 	}
// };

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/signin',
			name: 'Sign In',
			component: SignIn,
		},
		{
			path: '/signup',
			name: 'Sign Up',
			component: SignUp,
		}

	]
});