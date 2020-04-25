import Vue from 'vue'
import Vuex from 'vuex'
const http = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    fetchUsers (context, {page, quantity}) {
      http.get('https://api.github.com/users', {
        params: {
          page,
          per_page: quantity
        }
      }).then(res => {
        context.commit('setUsers', res.data)
      })
    },
    fetchUser (context, id) {
      http.get('https://api.github.com/users/' + id).then(res => {
        context.commit('setUser', res.data)
      })
    }
  },
  getters: {
    getUser: state => state.user,
    getUsers: state => state.users
  }
})
