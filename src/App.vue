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
        endDay() {

        }
    }
</script>

<style>
</style>
