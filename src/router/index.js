import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const constantRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/login.vue')
	}
]

// 导出路由 在main.js里使用
const router = new VueRouter({
	routes: constantRoutes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return {x: 0, y: 0}
		}
	}
})

export default router;