import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import kidService from '../services/kid.service.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        kids: [],
        kidsFilter: '',
        isAdmin: false,
        token: ''
    },
    getters,
    actions,
    mutations
})

export default store