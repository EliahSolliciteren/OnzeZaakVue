import axios from 'axios';
import store from './store';


const state={
klant: null,
token:'',
aanmelderror:''


}











const actions={
async klantAanmaken({commit},payload){
    console.log(payload)
 await axios({
url:"http://localhost:3001/klant/create",
method:'post',
data:{
voornaam: payload.voornaam,
familienaam: payload.familienaam,
username:payload.email,
email:payload.email,
telfoonnummer: payload.telefoonnummer,
gemeente: payload.gemeente,
straat: payload.straat,
huisnummer: payload.huisnummer,
password:payload.wachtwoord

    
    }})

},

    aanmelden({commit},payload){
        console.log(payload.email)
            axios({
                url:"http://localhost:3001/klant/aanmelden",
                method:"post",
                data:{
        email:payload.email,
        password:payload.wachtwoord
        }
        
        }).then((response)=>{
          
          
            commit('SET_TOKEN',response.data.token)
        commit('SET_GEBRUIKER',response.data)    
        commit('AANMELDERROR',false)
        console.log(
            response.data)
        }).catch((error)=>{commit('AANMELDERROR',true)})
},
      afmelden({commit}){

commit('AFMELDEN')





      }
      
      }

       const mutations={

            SET_TOKEN: (state, token) => {
                state.token = token;
              },
              SET_GEBRUIKER: (state, klant) => {
                state.klant = klant;
              },
              AFMELDEN: state => {
                state.klant=null,
                state.token=''
              },
              AANMELDERROR: (state,eenBoolean) => {
                  state.aanmelderror=eenBoolean

              }
            }
        


    const getters={
    
            token: state => {return state.token},
            klant: state=>{return state.klant},
            aanmeldError: state=>{return state.aanmelderror}
            }
    
    
    
    
     const Klant = {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,

    
    
    };
    
     export default Klant
























