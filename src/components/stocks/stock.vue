<template>
    <div class="col-md-6 col-sm-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h6><span class="stock-name"><strong>{{stock.name}}</strong></span>(price:{{stock.price}}) </h6>
            </div>
            <div class="panel-body">
                <form class="form-inline">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Quantity" v-model="quantity">
                  </div>
                  <button type="submit" @click.prevent="bought" class="btn btn-success pull-right" :disabled="Number.parseInt(quantity)<=0 || !Number.isInteger(Number.parseInt(quantity))">Buy</button>
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
            bought: function() {
                this.$store.commit('bought', { stock: this.stock, quantity: this.quantity })
            }
        }
    }
</script>
<style>
    .stock-name {
        font-size: 20px;
    }
</style>
