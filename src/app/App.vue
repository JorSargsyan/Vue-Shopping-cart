<template>
  <div id="app">
    <div class="container">

      <h2>Shopping Cart With VUE.JS</h2>
      <div class="row main-section">
      <div class="col-lg-4">
        <CartList/>
      </div>
      <div class="col-lg-8">
        <ProductList />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";



export default {
  name: 'App',
  components:{
    CartList,
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-section{
    background: #ccc;
    box-shadow: 0 0 3px 1px #0000005e;
    padding: 15px 30px;
}

p{
  margin-bottom: 0;
}


  .container {
      max-width: 1400px;
  }



h2{
    text-transform: uppercase;
    padding-bottom: 54px;
    letter-spacing: 2px;
    color: gray;
}

*{
  font-family: "Oswald",sans-serif;
}
</style>
