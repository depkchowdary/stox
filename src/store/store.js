import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        stocks: [{
                id: 1,
                name: "M&M",
                price: 1400,
            },
            {
                id: 2,
                name: "HDFC",
                price: 400,
            },
            {
                id: 3,
                name: "TCS",
                price: 4400,
            },
            {
                id: 4,
                name: "Infosys",
                price: 1300,
            }
        ],
        funds: 100000,
        portfolio: [

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
        portfolio: function(state, getters) {
            return state.portfolio.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: stock.name,
                    price: stock.price,
                    ltp: record.price
                }
            })
        }
    },
    mutations: {
        bought: function(state, payload) {
            let currentStock = {
                id: payload.stock.id,
                name: payload.stock.name,
                price: payload.stock.price,
                quantity: Number(payload.quantity)
            }
            if (state.funds > payload.stock.price) {

                let record = state.portfolio.find(function(el) {
                    if (el.id === currentStock.id) {
                        return el
                    }
                })

                if (record) {
                    record.price = Math.round((record.price * record.quantity + currentStock.price * currentStock.quantity) / (record.quantity + currentStock.quantity), 2)
                    record.quantity += currentStock.quantity
                }
                else {
                    state.portfolio.push(currentStock)
                }
                state.funds -= payload.stock.price * payload.quantity
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
