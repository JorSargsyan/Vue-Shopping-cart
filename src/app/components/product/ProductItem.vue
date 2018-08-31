<template>
     <div class="item row" >
            <div class="col-lg-3">
                <img class="item-pic img-fluid" :src="item.imgUrl" alt="">
            </div>
            <div class="col-lg-6">
                <h4>{{item.title}}</h4>
                <p>{{item.description}}</p>
                 <span class="price"><i class="fa fa-usd"></i> {{item.price}}</span>
            </div>
            <div  class="col-lg-3">
                <button @click="addCartItem(item)" class="btn btn-success addCartButton">Add to cart</button>
            </div>
        </div>
</template>


<script>

import {mapActions} from "vuex"

export default {
    name: "ProductItem",
    props :['item'],
    methods : {
      ...mapActions([
          'addCartItem'
      ])
    }
}
</script>


<style>

.product-list .item img{
    max-height: 250px;
}
.product-list .item p{
    font-size: 18px;
}
.product-list .item span.price{
    font-size:18px;
}
</style>


