import { createStore } from 'vuex';
import Bestelling from './moduleBestelling' 
import Klant from './moduleKlant'
import persistedStateVuex from "persisted-state-vuex";

export default createStore({

modules:{
Bestelling,
Klant
},
    
plugins: [persistedStateVuex.init],
    
    })

