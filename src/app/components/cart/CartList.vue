<template>
   <div id="cart" class=" col-lg-12">
       <ul class="cart-list">
           <div 
           v-for="item in cartItems"
           :key = "item.id"
           >
                <CartItem  :CartItem = item></CartItem>
         
           </div>
          <div class="container-fluid">
           <div class="cart-details row" >
               <div class="col-lg-6">
                    <p>Total Quantity :<span>{{cartQuantity}}</span></p>
               </div>
                 <div class="col-lg-6">
                    <button  @click="removeCartAllItems" class="btn btn-danger cart-remove-all">
                   <i class="fa fa-trash"></i>Remove All
                    </button>
               </div>
                 <div class="col-lg-12">
                    <button @click="checkOutCart" class="btn btn-success">Checkout ( <span>${{cartsTotal}}</span> ) </button>
               </div>
           </div>
           </div>
       </ul>
      
   </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "./CartItem";

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartItems", "cartsTotal", "cartQuantity"])
  },
  methods: {
    ...mapActions(["removeCartAllItems", "checkOutCart"])
  },
  components: {
    CartItem
  }
};
</script>


<style>
.cart-details p {
  font-size: 20px;
}

.cart-details>div{
    padding-bottom: 10px;
}

.cart-list {
  list-style-type: none;
}

.cart-item {
  padding: 15px;
}

.cart-item .title {
  font-weight: 600;
}

.cart-details p {
  font-weight: 600;
}

.cart-item .quantity {
  font-weight: 600;
  color: gray;
}

.cart-item .cart-item-modify {
  font-size: 31px;
  transition: 0.5s;
  cursor: pointer;
}

.cart-item .cart-item-modify:hover {
  color: #28a745;
}

.cart-item .price {
  color: #28a745;
  font-weight: 600;
  font-style: italic;
}

.cart-details {
  display: flex;
  justify-content: space-between;
  padding: 15px 5px;
}

.float-right {
  float: right;
}

ul {
  padding: 5px 5px;
}
</style>


