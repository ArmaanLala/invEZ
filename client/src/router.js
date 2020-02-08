import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import SignOut from './components/SignOut.vue'
import Main from './components/app/Main.vue'
import MoreInfo from './components/MoreInfo.vue'

const isAuthenticated = async () => {
	const resp = await fetch('api/users/isauthenticated');
	const data = await resp.json();
	return data.isSignedIn;
};

// If user is authenticated, redirect
// from /signin and /signup to /app.
const checkAuthenticated = async (to, from, next) => {
	if (await isAuthenticated()) {
		next('/app');
	} else {
		next();
	}
};

// If user is not authenticated, redirect
// to /signin from /app.
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
			path: '/signout',
			name: 'SignOut',
			component: SignOut
		},
		{
			path: '/app',
			name: 'Main',
			component: Main,
			beforeEnter: checkNotAuthenticated
		},
		{
			path: '/moreinfo',
			name: 'More Info',
			component: MoreInfo,
			// beforeEnter: checkNotAuthenticated
		}
	]
});