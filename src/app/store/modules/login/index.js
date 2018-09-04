import Axios from "axios";

const state = {
    token : null
}

const actions  = {
    login({commit}){
      return  Axios.post("/api/login").then((response)=>{
            localStorage.setItem("token",response.token);
            commit("SET_TOKEN",response.data.token);
        })
    },
    logout({commit}){
        return new Promise((resolve)=>{
            localStorage.removeItem('token');
            commit("SET_TOKEN",null);
            resolve();
        })
    }
}

const mutations = {
    SET_TOKEN(state,token){
        state.token = token;
    }
}

const getters = {
    token : state=> state.token
}


const loginModule = {
    state,
    mutations,
    actions,
    getters,
}


export default loginModule;