import { createRouter,  createWebHashHistory   } from 'vue-router'

const routerHistory = createWebHashHistory();

import HomePage from "./pages/TheHome.vue"
import AboutPage from "./pages/TheAbout.vue"
import NotFound from "./pages/notFound.vue"

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage

        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage

        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFound

        },
    ]
})

export default routers;



