<template>
       <li class="cart-item">
               <div class="row">
                   <div class="col-lg-3">
                       <img :src="CartItem.imgUrl" alt="" class="img-fluid">
                   </div>
                   <div class="col-lg-5">
                        <h6 class="title">{{CartItem.title}}</h6>
                         <span class="price">
                           {{CartItem.price}} $ each
                        </span>
                   </div>
                   <div class="col-lg-4">
                        <div class="">
                       <i @click="addCartItem(CartItem)" class="fa fa-arrow-circle-up cart-item-modify"></i>
                        <i @click="removeCartItem(CartItem)" class="fa fa-arrow-circle-down cart-item-modify"></i>
                          <div class="content">
                       <span class="quantity">
                           Quantity: {{CartItem.quantity}}
                       </span>
                   </div>
                        </div>
                   </div>
               </div>
           </li>

</template>


<script>
import {mapActions} from "vuex"

export default {
    name: 'CartItem',
    props : ['CartItem'],
    methods:{
        ...mapActions([
            'addCartItem',
            'removeCartItem'
        ])
    }
}
</script>


<style>

.cart-item{
    margin-bottom: 6px;
    height: 100px;

}
</style>

