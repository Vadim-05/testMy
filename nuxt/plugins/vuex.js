import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            myDate: null
        };
    },
    mutations: {
        addDate(state, index){
            state.myDate = index
        }
    },
     actions:{
    addDateMut({commit},index){
      commit('addDate',index)
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});