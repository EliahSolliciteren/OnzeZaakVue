import axios from 'axios';


const state={
gebruiker: null,
token:''
}














const actions={
klantAanmaken({commit},payload){
    console.log(payload)
    axios({
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

    
    }})},

    aanmelden({commit},payload){
        console.log(payload.email)
            axios({
                url:"http://localhost:3001/klant/aanmelden",
                method:"post",
                data:{
        email:payload.email,
        password:payload.wachtwoord
        }
        
        }).then((response)=>{console.log(response.data.token)
            commit('SET_TOKEN',response.data.token)
        commit('SET_GEBRUIKER',response.data)    
        console.log(
            response.data)
        
        
        
        
        })}}

       const mutations={

            SET_TOKEN: (state, token) => {
                state.token = token;
              },
              SET_GEBRUIKER: (state, gebruiker) => {
                state.gebruiker = gebruiker;
              },
              RESET: state => {
                state.gebruiker={},
                state.token=''
              }
            }
        


    const getters={
    
            token: state => state.token,
            gebruiker: state=>state.gebruiker
            }
    
    
    
    
     const Klant = {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
    
    
    
    };
    
     export default Klant
























