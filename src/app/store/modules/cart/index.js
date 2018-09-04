import Axios from "axios"


const state = {
    cartItems : [],
    checkout :false
};


const mutations = {
    UPDATE_CART_ITEMS(state,payload){
        state.cartItems = payload;
    },
    CHECK_OUT_CART(state,payload){
        state.checkout = true;
    }
};

const actions = {
    getCartItems({commit}){
        Axios.get("/api/cart").then((response) => {
            commit("UPDATE_CART_ITEMS",response.data)
        });
    },
    addCartItem({commit},cartItem){

        return Axios.post("/api/cart",cartItem).then((response) => {
            
           commit("UPDATE_CART_ITEMS",response.data);
        })
    },
    removeCartItem({commit},cartItem){
        Axios.post("/api/cart/delete",cartItem).then((response)=>{
            commit("UPDATE_CART_ITEMS",response.data);
        })
    },
    removeCartAllItems({commit}){
        Axios.post("/api/cart/removeall").then((response)=>{
            commit("UPDATE_CART_ITEMS",response.data);
        })
    },
    checkOutCart({commit},cart){
        Axios.post("/api/cart/checkout").then((response)=>{
            commit("CHECK_OUT_CART",response.data);

        })
    }
};


const getters = {
    cartItems : state => state.cartItems,
    cartsTotal  : state => {
        return state.cartItems.reduce((acc,cartItem)=>{
            return(cartItem.quantity * cartItem.price) + acc;
        },0).toFixed(2);
    },
    cartQuantity : state => {
        return state.cartItems.reduce((acc,cartItem)=>{
            return cartItem.quantity + acc;
        },0)
    }
};

const CartModule = {
    state,
    actions,
    mutations,
    getters
}


export default CartModule;
