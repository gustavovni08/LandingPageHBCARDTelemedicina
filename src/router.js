import { createRouter, createWebHistory } from 'vue-router'

import LandingPageHome from './views/LandingPageHome.vue'
import CheckoutIndividual from './views/CheckoutIndividual.vue'
import CheckoutFamiliar from './views/CheckoutFamiliar.vue'


const routes = [
    {path: '/', component: LandingPageHome},
    {path: '/PlanoIndividual', component: CheckoutIndividual},
    {path: '/PlanoFamiliar', component: CheckoutFamiliar},

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router