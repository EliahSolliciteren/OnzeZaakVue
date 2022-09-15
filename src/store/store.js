import { createStore } from 'vuex';
import Bestelling from './moduleBestelling' 
import createPersistedState from "vuex-persistedstate";

export default createStore({

modules:{
Bestelling

},
    
    plugins: [createPersistedState()]
    
    })

