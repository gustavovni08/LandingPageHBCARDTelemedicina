import { createRouter, createWebHistory } from 'vue-router'

import LandingPageHome from './views/LandingPageHome.vue'
import CheckoutIndividual from './views/CheckoutIndividual.vue'
import CheckoutFamiliar from './views/CheckoutFamiliar.vue'

import LandingPageHome1 from './views/zenilson/LandingPageHome1.vue'
import CheckoutIndividual1 from './views/zenilson/CheckoutIndividual1.vue'
import CheckoutFamiliar1 from './views/zenilson/CheckoutFamiliar1.vue'

import LandingPageHome2 from './views/mericia/LandingPageHome2.vue'
import CheckoutIndividual2 from './views/mericia/CheckoutIndividual2.vue'
import CheckoutFamiliar2 from './views/mericia/CheckoutFamiliar2.vue'

import LandingPageHome3 from './views/joyce/LandingPageHome3.vue'
import CheckoutIndividual3 from './views/joyce/CheckoutIndividual3.vue'
import CheckoutFamiliar3 from './views/joyce/CheckoutFamiliar3.vue'


const routes = [
    {path: '/', component: LandingPageHome},
    {path: '/PlanoIndividual', component: CheckoutIndividual},
    {path: '/PlanoFamiliar', component: CheckoutFamiliar},

    {path: '/linkzv1', component: LandingPageHome1},
    {path: '/PlanoIndividual1', component: CheckoutIndividual1},
    {path: '/PlanoFamiliar1', component: CheckoutFamiliar1},

    {path: '/linkzv2', component: LandingPageHome2},
    {path: '/PlanoIndividual2', component: CheckoutIndividual2},
    {path: '/PlanoFamiliar2', component: CheckoutFamiliar2},

    {path: '/linkzv3', component: LandingPageHome3},
    {path: '/PlanoIndividual3', component: CheckoutIndividual3},
    {path: '/PlanoFamiliar3', component: CheckoutFamiliar3},

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router