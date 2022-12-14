import HomePage from './components/HomePage.vue'
import SignUpModal from './components/SignUpModal'
import LoginModal from './components/LoginModal'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'HomePage',
		component: HomePage,
		path: '/'
	},
	{
		name: 'SignUpModal',
		component: SignUpModal,
		path: '/sign-up'
	},
	{
		name: 'LoginModal',
		component: LoginModal,
		path: '/login'
	}
];

const router = createRouter({
	history:createWebHistory(),
	routes,
});

export default router;