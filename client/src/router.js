import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/signin',
			name: 'login',
			component: Login,
		},
		{
			path: '/signup',
			name: 'Create Account',
			component: SignUp,
		}

	]
});