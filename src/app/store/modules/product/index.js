import Axios from "axios"


const state = {
    productItems:[]
};

const mutations = {
    UPDATE_PRODUCT_ITEMS(state,payload){
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({commit}){
        Axios.get("/api/products").then((response ) => {
            commit("UPDATE_PRODUCT_ITEMS",response.data)
        });
    }
};



const getters = {
    productItems : state => state.productItems
};

const ProductModule = {
    state,
    actions,
    mutations,
    getters
}

export default ProductModule;