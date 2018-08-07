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
        funds: 100000,
        portfolio: [

            {
                name: "Infosys",
                price: 1300,
                quantity: 10
            }
        ],
    },
    getters: {
        stocks: function(state) {
            return state.stocks
        },
        funds: function(state) {
            var funds = "$" + state.funds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return funds;
        },
        portfolio: function(state) {
            console.log(state.portfolio)
            return state.portfolio
        }
    },
    mutations: {
        bought: function(state, payload) {
            console.log("Bought mutation")
            console.log(payload)
            let currentStock = {
                name: payload.stock.name,
                price: payload.stock.price,
                quantity: Number(payload.quantity)
            }
            if (state.funds > payload.stock.price) {
                console.log("funds available")
                state.funds -= payload.stock.price * payload.quantity
                state.portfolio.push(currentStock)
                console.log(state.portfolio)
            }
            else {

            }
        },
        sell: function(state, payload) {
            console.log("Sell mutation")
            console.log(payload)
            let currentStock = {
                name: payload.stock.name,
                price: payload.stock.price,
                quantity: Number(payload.quantity)
            }
            state.portfolio.forEach((stock, index) => {
                console.log(stock)
                if (stock.name === currentStock.stock) {
                    console.log("Matched")
                    console.log(stock)
                    if (currentStock.quantity === stock.quantity) {
                        state.funds += currentStock.price * currentStock.quantity
                        state.portfolio.splice(index, 1)
                    }
                    else {
                        state.funds += currentStock.price * currentStock.quantity
                        stock.quantity -= currentStock.quantity
                    }
                }
            })
        }

    },
    actions: {
        stockTrade: function({ state }) {
            state.stocks.forEach((stock) => {
                setInterval(function() {
                    stock.price += randInt(stock.price)
                }, 1000)
            })
        }
    },
    models: {

    }
})


const randInt = function(stockPrice) {
    let ucOrLc = (stockPrice / 100) * 0.5
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return Math.round(ucOrLc * plusOrMinus);
}
