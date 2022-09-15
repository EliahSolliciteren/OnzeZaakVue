import createPersistedState from "vuex-persistedstate";

import axios from "axios";

const state={

menukaart:[],
bestelling:[],
categorie:'alles'


}

const actions={
    menukaart({commit}){
    axios.get('http://localhost:3001/gerecht/allegerechten')
.then(response=>{
commit('MENUKAART', response.data)}
//console.log(response)
)


    },
toevoegenAanBestelling({commit}, gerecht){


 commit('TOEVOEGENAANBESTELLING', gerecht)//;console.log(state.bestelling)
    

},
herbeginnen({commit}){

commit('HERBEGINNEN')



},
verwijderen({commit},gerecht){

commit('VERWIJDEREN',gerecht )



},

andereCategorie({commit},gerecht){

commit('ANDERECATEGORIE', gerecht)



}




}

const mutations={
MENUKAART(state,payload){
state.menukaart=payload
},
TOEVOEGENAANBESTELLING(state,payload){
    const indexBestelling=state.bestelling.findIndex(e=>e.naam==payload.naam)
if (indexBestelling ==-1){
    payload.aantal=1
state.bestelling.push(payload)}
else{

state.bestelling[indexBestelling].aantal++
console.log(indexBestelling)
}
const indexMenukaart=state.menukaart.findIndex(e=>e.naam==payload.naam)
state.menukaart[indexMenukaart].aantal++

}, 

HERBEGINNEN(state){
    state.bestelling=[]

},
VERWIJDEREN(state, payload){

const index=state.bestelling.findIndex(e=>e.naam==payload.naam)
console.log(index)
console.log(state.bestelling)
state.bestelling[index].aantal--


},

ANDERECATEGORIE(state,payload){
state.categorie=payload



}

//console.log(state.bestelling[length-1].aantal)
//state.bestellingen=[]
}





const getters={
    
        menukaart: state => state.menukaart,
        bestelling: state=>state.bestelling
        }




 const Bestelling = {
namespaced:true,
state,
actions,
mutations,
getters,
plugins: [createPersistedState()]


};

 export default Bestelling