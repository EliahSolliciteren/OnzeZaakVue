import { createStore } from 'vuex';
import Bestelling from './moduleBestelling' 
import Klant from './moduleKlant'
import createPersistedState from "vuex-persistedstate";

export default createStore({

modules:{
Bestelling,
Klant
},
    
    plugins: [createPersistedState()]
    
    })

