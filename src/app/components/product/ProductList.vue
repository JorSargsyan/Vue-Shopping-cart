<template>
    
<div id="products">
    <div class="products-header">
        <i class="fa fa-2x fa-user-circle"></i>
        <hr>
    </div>

    <div class="product-list">

        <div v-for="item in productItems"
            :key="item.id">

        <ProductItem :item = "item"></ProductItem>
       
        </div>
    </div>
    <div class="product-count">
        <span># of products : {{Object.keys(productItems).length}} </span>
    </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductItem from "./ProductItem"

export default {
  name: "ProductList",
  components: {
      ProductItem
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  computed: {
    ...mapGetters(["productItems"])
  }
};
</script>


<style>
#products {
  background: white;
  box-shadow: 0 0 3px 1px #0000004a;
  padding: 15px;
}

.product-list .item {
  padding: 15px;
  margin: 15px 0;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.product-list .item h4 {
  font-size: 20px;
}

.product-list .item p {
  font-size: 14px;
}

.product-list .item span.price {
  font-weight: 600;
  font-size: 14px;
  color: #28a745;
}

.addCartButton {
  float: right;
}

.product-count {
  display: flex;
  justify-content: flex-end;
}

.product-count span {
  font-weight: 600;
}
</style>

