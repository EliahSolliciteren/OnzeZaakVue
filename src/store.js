import { createStore } from "vuex";
import axios from "axios";

const state={

menukaart:[]



}

const actions={
    menukaart({commit}, payload){
    axios.get('http://localhost:3001/gerecht/alleGerechten')
.then(response=>{console.log(response.data)
commit('MENUKAART', response.data)

})


    }

}

const mutations={
MENUKAART(state,payload){
state.menukaart=payload
console.log(state.menukaart)


}



}


const getters={
menukaart: state=>state.menukaart





}

const store=createStore({

state,
actions,
mutations,
getters


})

export default store