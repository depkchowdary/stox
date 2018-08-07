<template>
    <div class="row">
        <appViewStock v-for="stock in portfolio" :stock="stock" :id="stock.name"></appViewStock>
    </div>
</template>

<script>
    import appViewStock from './viewPort.vue'
    export default {
        computed: {
            portfolio: function() {
                return this.$store.getters.portfolio
            }
        },
        components: {
            appViewStock
        }
    }
</script>
<style>
</style>
