import Axios from "axios"


const state = {
    cartItems : []
};


const mutations = {
    UPDATE_CART_ITEMS(state,payload){
        state.cartItems = payload;
    }
};

const actions = {
    getCartItems({commit}){
        Axios.get("/api/cart").then((response) => {
            commit("UPDATE_CART_ITEMS",response.data)
        });
    },
    addCartItem({commit},cartItem){
        Axios.post("/api/cart",cartItem).then((response) => {
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
    }
};


const getters = {
    cartItems : state => state.cartItems,
    cartsTotal  : state => {
        return state.cartItems.reduce((acc,cartItem)=>{
            return(cartItem.quantity * cartItem.price) + acc;
        },0);
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
