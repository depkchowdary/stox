import portfolio from './components/Portfolio.vue'
import stocks from './components/Stocks.vue'
import landing from './components/landing.vue'

export const routes = [
    { path: "/", component: landing },
    { path: "/portfolio", component: portfolio },
    { path: "/stocks", component: stocks }
]
