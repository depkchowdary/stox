<template>
  <div id="app">
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/">StoX</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link tag="li"  to="/portfolio" activeClass="active"><a> Portfolio </a></router-link>
        <router-link tag="li"  to="/stocks" activeClass="active"><a> Stocks </a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><button class="btn btn-transparent">End Day</button></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li @click="saveData"><a href="#">Save</a></li>
            <li><a href="#">Load</a></li>
          </ul>
          <li><a><strong>Funds: {{funds}}</strong></a></li>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>

<script>
  export default {
    methods: {
      endDay: function() {
        this.$emit('endDay')
      }
    },
    computed: {
      funds: function() {
        return this.$store.getters.funds
      }
    },
    methods: {
      saveData: function() {
        console.log("clicked on save data from drop down")
        this.$store.dispatch('saveData')
      }
    }
  }
</script>

<style scoped>
  .btn-transparent {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }
</style>
