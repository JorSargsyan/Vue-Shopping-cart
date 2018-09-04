<template>
  <div id="app" >
     <header>
        <h2>Shopping Cart With VUE.JS</h2>
        <ul class="menu">
          <li>
              <router-link to="/products">
          <i class="fa fa-user-circle"></i><span>Shop</span>
              </router-link>
          </li>
          <li>
             <router-link to="/cart">
          <i class="fa fa-shopping-cart"></i><span>Cart </span>
               <span style="padding-left:7px">{{cartQuantity}}</span>
              </router-link>  
          </li>
        </ul>
      
    </header>
    <div @click="ClickOnDoc($event)" class="document">
    <div class="container">
      <div class="row main-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";
import {mapGetters} from 'vuex';

export default {
  name: "App",
  data() {
    return {
      showCartList: false
    };
  },
    created() {
    this.$store.dispatch("getCartItems");
    this.$store.dispatch("getProductItems");
  },
  components: {
    CartList,
    ProductList
  },
  methods: {
    ClickOnDoc(event) {
      if (this.showCartList) {
        if (event.target != this.$refs["dropdown"]) {
          this.showCartList = false;
        }
      }
    }
  },
  computed:{
    ...mapGetters([
      'cartQuantity'
    ])
  }
};
</script>

<style>


.container{
  padding-top: 100px;
}
#styled-scrollbar::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
  left: 15px;
}

#styled-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(153, 150, 150);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cartlist-outer {
  position: absolute;
  width: 30%;
  background: white;
  right: 57px;
  height: 70vh;
  overflow-y: scroll;
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  top: 79px;
  -webkit-box-shadow: 0 0 8px 5px #77747447;
  box-shadow: 0 0 8px 5px #77747447;
}

.cart-icon {
  position: absolute;
  right: 41px;
  top: 17px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  outline: none !important;
}

.main-section {
  background: #ccc;
  box-shadow: 0 0 3px 1px #0000005e;
  padding: 15px 30px;
}

#products {
  width: 100%;
}

p {
  margin-bottom: 0;
}

.container {
  max-width: 1400px;
}

header {
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 3px 4px #0000002b;
  z-index: 99;
      position: relative;
}

.menu{
      display: flex;
    list-style: none;
    position: absolute;
    top: 26px;
    right: 30px;
    justify-content: space-around;
    width: 170px;
    padding: 0;
}

.menu a{
    color: inherit;
    font-size: 20px;
     display: flex;
    text-decoration: none;
}

.menu a i{
      padding-right: 6px;
    display: block;
    margin-top: 6px;
}

#cart{
    background: rgb(204, 204, 204);
    padding-top: 25px;

}
.menu a span{
  display: block;
}

h2 {
  text-transform: uppercase;
  padding-bottom: 54px;
  letter-spacing: 2px;
  color: gray;
  padding: 20px 0;
  margin-bottom: 0;
}

* {
  font-family: "Oswald", sans-serif;
}
</style>
