<template>
    <section id="product-item" class="box row"  v-if="productItem">
        <span class="return-icon" @click="$router.go(-1)"> <i class="fa fa-arrow-left "></i> </span> 
        <div class="col-lg-12">
              <h1 class="title is-4"> 
                <p>{{ productItem.title }}</p>
              </h1>
        </div>
         <div class="product-item__image col-lg-12"> 
              <img class="img-fluid" :src="productItem.imgUrl" alt="">
         </div> 
         <div class="product-item__details  col-lg-12">
             
             <h1 class="title is-4"> 
                  <span class="tag product-item__tag">{{ productItem.type }}</span>
             </h1> 
             <p class="product-item__description">{{ productItem.description }}</p> 
             <button @click="addAndGoToCart(productItem)" class="button btn-success btn product-item__button">Add to Cart</button>
        </div>
         
   </section> 

</template>


<script>
export default {
  name: "ProductDetails",
  props :['id'],
  computed: {
      productItem(){
          return this.$store.getters.productItemFromId(Number(this.id));
      }
  },
  methods:{
      addAndGoToCart(item){
          this.$store.dispatch("addCartItem",item).then(()=>{
                 this.$router.push("/cart");
          });
      }
  }
};
</script>

<style>
#product-item {
  display: flex;
  width: 100%;
  position: relative;
}
.return-icon {
  position: absolute;
  top: 5px;
  font-size: 20px;
  cursor: pointer;
  left: 10px;
  color: #030303;
  cursor: pointer;
  z-index: 99;
}
 .product-item__details {
     text-align: center;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-item__image {
  display: flex;
  flex-direction: column;
    padding-bottom: 40px;
  justify-content: center;
}

.product-item__image img{
      height: 100%;
  object-fit: contain;
  max-height: 700px;
}

.product-item__description {

  padding-bottom: 10px;
}
.product-item__created_at {
  font-size: 12px;
  padding-bottom: 10px;
}
.product-item__button {
  max-width: 150px;
  margin: 0 auto;
}
</style>

