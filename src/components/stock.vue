<template>
    <div class="col-md-6 col-sm-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span class="stock-header"><h6><strong>{{stock.name}}</strong></h6><p>price:{{stock.price}}</p> </span>
             </div>
            <div class="panel-body">
                <form class="form-inline">
                  <div class="form-group">
                    <label for="buyQuantity">Quantity:</label>
                    <input type="text" class="form-control" id="buyQuantity" placeholder="Quantity">
                  </div>
                  <button type="submit" @click.prevebt="" class="btn btn-success pull-right">Buy</button>
                </form>
            </div>
        </div> 
    </div>
</template>
<script>
    export default {
        props: ['stock']
    }
</script>
<style>
    .stock-header {
        width: 100%;
        display: inline;
        height: 100%;
    }
</style>
