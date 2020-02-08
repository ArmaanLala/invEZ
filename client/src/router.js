import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import SignOut from './components/SignOut.vue'
import Main from './components/app/Main.vue'
import UpdateInfo from './components/UpdateInfo.vue'

const isAuthenticated = async () => {
	const resp = await fetch('api/users/isauthenticated');
	const data = await resp.json();
	return data.isSignedIn;
};

// If already logged in, redirect to the application.
const checkAuthenticated = async (to, from, next) => {
	if (await isAuthenticated()) {
		next('/app');
	} else {
		next();
	}
};

// Must be logged in to access.
const checkNotAuthenticated = async (to, from, next) => {
	if (!(await isAuthenticated())) {
		next('/signin');
	} else {
		next();
	}
};

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
			name: 'SignIn',
			component: SignIn,
			beforeEnter: checkAuthenticated
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUp,
			beforeEnter: checkAuthenticated
		},
		{
			path: '/UpdateInfo',
			name: 'UpdateInfo',
			component: UpdateInfo,
			beforeEnter: checkNotAuthenticated
		},
		{
			path: '/signout',
			name: 'SignOut',
			component: SignOut
		},
		{
			path: '/app',
			name: 'Main',
			component: Main,
			beforeEnter: checkNotAuthenticated
		}
	]
});