import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        stocks: [{
                name: "M&M",
                price: 1400,
            },
            {
                name: "HDFC",
                price: 400,
            },
            {
                name: "TCS",
                price: 4400,
            },
            {
                name: "Infosys",
                price: 1300,
            }
        ],
        funds: 10000,
        portfolio: [],
    },
    getters: {
        stocks: function(state) {
            console.log(state.stocks)
            return state.stocks
        }
    },
    mutations: {

    },
    actions: {

    },
    models: {

    }
})
