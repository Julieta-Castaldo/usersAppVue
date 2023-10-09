import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const routes = [
    { path: '/dashboard', name: 'dashboard', meta: { requiresAuth: true }, component: () => import('./views/Dashboard.vue') },
    { path: '/create-user', name: 'create-user', component: () => import('./views/SignIn.vue') },
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    { path: '/user-update', name: 'user-update', meta: { requiresAuth: true }, component: () => import('./views/UserUpdate.vue') },
    { path: '/:catchAll(.*)', redirect: '/dashboard'}
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuth = localStorage.getItem('token')

    if (!requiresAuth && isAuth && (to.path === '/login')) {
        next('/dashboard')
    } else if (requiresAuth && !isAuth) {
        next('/login')
    } else {
        next()
    }

})

export default router