import { createRouter, createWebHistory } from 'vue-router'

import LandingPageHome from './views/LandingPageHome.vue'
import CheckoutIndividual from './views/CheckoutIndividual.vue'
import CheckoutFamiliar from './views/CheckoutFamiliar.vue'
import NotFound from './views/NotFound.vue'

const vendors = ['vivianePT', 'zenildeBR']


const routes = [
    {path: '/', component: LandingPageHome},
    {path: '/PlanoIndividual', component: CheckoutIndividual},
    {path: '/PlanoFamiliar', component: CheckoutFamiliar},
    // {path: '/NotFound', component:NotFound},

    {path:'/:vendor_code', 
    component: LandingPageHome, 
    beforeEnter: (to, from, next) => {
        const vendor_code = to.params.vendor_code

        if(vendors.includes(vendor_code)) {
            next()
        }else{
            next({name: 'NotFound'})
        }
    }},

    { path: '/:catchAll(.*)', component: NotFound },

    // { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router