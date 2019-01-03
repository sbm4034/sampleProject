import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      sampleData: 'I am your data'
    },
    mutations: {
      setData ({state}, value) {
        state.sampleData = value
      }
    },
    getters: {
      getData: state => {
        console.log('HERE OR NO', '')
        return state.sampleData
      }
    },
    actions: {
      dispatchgetrequest: function ({commit, state, dispatch}, params) {
        console.log('HELLO I AM YOUR PARAM', params)
        // send these param to mutations
      }
    }
  }
)
