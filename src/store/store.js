import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        stocks: [],
        funds: 100000,
        portfolio: [],
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
                    fireBaseId: stock.fireBaseId,
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
                fireBaseId: payload.stock.fireBaseId,
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
            if (payload.quantity == payload.stock.quantity) {
                state.portfolio.forEach((stock, index) => {
                    if (payload.stock.id == stock.id) {
                        state.portfolio.splice(index, 1)
                        state.funds += payload.stock.ltp * payload.quantity
                    }
                })
            }
            else {
                state.portfolio.forEach((stock, index) => {
                    if (payload.stock.id == stock.id) {
                        stock.quantity -= payload.quantity
                        state.funds += payload.stock.ltp * payload.quantity
                    }
                })
            }
        }
    },
    actions: {
        initStocks: function({ state }) {
            db.collection('stocks').get().then((snapshot) => {
                snapshot.docs.forEach((stock) => {
                    state.stocks.push({
                        fireBaseId: stock.id,
                        id: stock.data().id,
                        name: stock.data().name,
                        price: stock.data().price
                    })
                })
                state.stocks.forEach((stock) => {
                    setInterval(function() {
                        stock.price += randInt(stock.price)
                    }, 1000)
                })
            })
        },
        saveData({ state }) {
            state.portfolio.forEach((stock) => {
                // Add a new document in collection "cities"
                db.collection("portfolio").doc(stock.fireBaseId).set({
                        id: stock.id,
                        name: stock.name,
                        quantity: stock.quantity,
                        price: stock.price
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

            })
            state.stocks.forEach((stock) => {
                db.collection("stocks").doc(stock.fireBaseId).set({
                        id: stock.id,
                        name: stock.name,
                        price: stock.price
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
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
