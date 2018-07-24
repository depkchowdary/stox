<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import appHeader from './components/Header.vue'
    export default {
        components: {
            appHeader
        }
    }
</script>

<style>
</style>
