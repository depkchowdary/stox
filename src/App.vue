<template>
  <div class="container">
    <app-header @endDay="endDay"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import appHeader from './components/Header.vue'
    export default {
        components: {
            appHeader
        },
        methods: {
            endDay() {

            }
        }
    }
</script>

<style>
</style>
