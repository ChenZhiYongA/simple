/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-02-01 11:00:27
 * Version: 0.0.0.1
 * Description: Vue Router Config Page
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index'

Vue.use(VueRouter)
/**
 * router's config for reference only
 * if there are other needs you can refer to Vue Router Official website
 * @type {[{redirect: string, path: string, component: {components: {Navbar: {data(): {mane: string}, watch: {"$refs.locale.value"(*=): void}, methods: {changeLang(): void}, name: string}, Footer: {name: string}, Main: {name: string}}, name: string}, children: [{path: string, component: (function(): Promise<{readonly default?: {data(): {articleArr: []}, created(): void, methods: {getArticle(): void}, name: string, filters: {omitContent(*): string}}}>), meta: {title: string}, name: string}, {path: string, component: (function(): Promise<{readonly default?: {name: string}}>), meta: {title: string}, name: string}]}, {path: string, component: (function(): Promise<*>), hidden: boolean}, {redirect: string, path: string, hidden: boolean}]}
 */
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/home/index.vue'),
                meta: {title: 'Home'}
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../views/about/index.vue'),
                meta: {title: 'about'}
            },
            {
                path: 'details',
                name: 'details',
                component: () => import('../views/home/details/index.vue'),
                meta: {title: 'details'}
            },
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {path: '*', redirect: '/404', hidden: true} // match 404 path
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
