import portfolio from './components/portfolio/portfolio.vue'
import stocks from './components/stocks/stocks.vue'
import landing from './components/landing.vue'

export const routes = [
    { path: "/", component: landing },
    { path: "/portfolio", component: portfolio },
    { path: "/stocks", component: stocks }
]
