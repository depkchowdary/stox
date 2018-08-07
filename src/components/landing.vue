<template>
    <div>
        <div class="panel panel-default">
          <div class="panel-body">
                <h1>Trade or view your portfolio</h1>
                <p>you can save & load portfolio</p>
                <p>click on End Day to begin new day</p>
                <hr>
                <h2><strong>Your funds: {{funds}}</strong></h2>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            funds: function() {
                return this.$store.getters.funds
            }
        }
    }
</script>
<style>
</style>
