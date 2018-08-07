<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.name"></app-stock>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import appStock from './stock.vue'
    export default {
        components: {
            appStock,
        },
        computed: {
            stocks: function() {
                return this.$store.getters.stocks
            }
        }
    }
</script>
<style>
</style>
