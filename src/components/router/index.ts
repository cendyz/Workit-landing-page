import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home/index.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: '/', component: Home }],
})

export default router
