import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            content:[],
            token:null,
            tokenLogout:null,
            user:{} // 
        }
    },
    getters:{
        authenticated(state){
            return state.token = localStorage.getItem('token')
        },
        auth(state){
            return state.user && state.token
        },
        userLevel(state){
            if(state.user.level == null){
                console.log('user level kosong')
            }
            return state.user.level

        }
    },
    mutations:{
        SET_CONTENT(state, paylod){
            state.content.push(paylod)
        },
        SET_TOKEN(state, paylod){
            state.token = paylod
            state.tokenLogout = paylod
        },
        SET_USER(state, paylod){
            state.user = paylod
        }
    },
    actions:{
        addContent(context, paylod){
            context.commit('SET_CONTENT', paylod)
        },
        addToken(context, paylod){
            context.commit('SET_TOKEN', paylod)
        },
        addUser(context, paylod){
            context.commit('SET_USER', paylod)
        }
    }
})

export default store;