<template>
   <div id="cart">
       <div class="cart-header">
           <i class="fa fa-2x fa-shopping-cart"></i>
           <hr>
       </div>
       <ul class="cart-list">
           <div 
           v-for="item in cartItems"
           :key = "item.id"
           >
                <CartItem :CartItem = item></CartItem>
           </div>
          
           <div class="cart-details" v-if="cartItems.length > 0">
               <p>Total Quantity :<span>{{cartQuantity}}</span></p>
               <button  @click="removeCartAllItems" class="btn btn-danger cart-remove-all">
                   <i class="fa fa-trash"></i>Remove All
               </button>
           </div>
       </ul>
       <button class="btn btn-success">Checkout ( <span>${{cartsTotal}}</span> ) </button>
   </div>
</template>


<script>
import {mapGetters,mapActions} from "vuex";
import CartItem from "./CartItem"

export default {
  name: "CartList",
  created(){
      this.$store.dispatch("getCartItems");
  },
  computed:{
      ...mapGetters([
          'cartItems',
          'cartsTotal',
          'cartQuantity'
      ]),
  },
  methods:{
      ...mapActions([
          'removeCartAllItems'
      ])
  }
  ,
  components: {
      CartItem
  }
};
</script>


<style>
.cart-list{
   
    list-style-type: none;
}

.cart-item{
    background: white;
    padding: 15px;
    box-shadow: 0 0 7px 1px #0000003d;
}

.cart-item .title{
    font-weight: 600;
}

.cart-details p{
    font-weight: 600;
}

.cart-item .quantity{
    font-weight: 600;
    color: gray;
}

.cart-item .cart-item-modify{
    font-size: 23px;
    transition: 0.5s;
    cursor: pointer;
}

.cart-item .cart-item-modify:hover{
    color: #28a745;
}



.cart-item .price{
    color: #28a745;
    font-weight: 600;
    font-style: italic;
}

.cart-details{
    display: flex;
    justify-content: space-between;
    padding: 15px 5px;
}



.float-right{
    float: right;
}

ul{
    padding: 5px 5px;
}
</style>


