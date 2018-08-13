<template>
    <div class="col-md-6 col-sm-12">
        <div class="panel panel-default">
            <div class="panel-heading">
        <h6><span class="stock-name"><strong>{{stock.name}}</strong></span>(price:{{stock.price}} | Quantity: {{stock.quantity}} ) <span class="pull-right">LTP:{{stock.ltp}}</span></h6>
            </div>
            <div class="panel-body">
                <form class="form-inline">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Quantity" v-model="quantity">
                  </div>
                  <button type="submit" @click.prevent="sell" class="btn btn-danger pull-right" :disabled="Number.parseInt(quantity)<=0 || !Number.isInteger(Number.parseInt(quantity))">Sell</button>
                </form>
            </div>
        </div> 
    </div>
</template>
<script>
    export default {
        props: ['stock'],
        data: function() {
            return {
                quantity: ''
            }
        },
        methods: {
            sell: function() {
                if (this.quantity <= this.stock.quantity) {
                    this.$store.commit('sell', { stock: this.stock, quantity: this.quantity })
                }
                else {
                    alert('No short selling allowed. Sell the stock you own!')
                }
            }
        }
    }
</script>
<style>
    .stock-name {
        font-size: 20px;
    }
</style>
