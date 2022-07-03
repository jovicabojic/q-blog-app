import axios from 'axios'

const state = {
    users: null
}

const getters = {
    users (state) {
        return state.users
    }
}

const mutations = {
    setUsers: (state, payload) => {
        state.users = payload
    }
}

const actions = {
    getUsers ({ commit }) {
        commit('setUsers', null)

        axios.get('/users')
            .then(response => {
                commit('setUsers', response.data)
            })
            .catch(err => {
                console.log('Error occurred getUsers:', err)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
