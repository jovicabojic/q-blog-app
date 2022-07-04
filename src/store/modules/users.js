import axios from 'axios'

const state = {
    users: []
}

const getters = {
    users (state) {
        return state.users
    },
    getUserById: (state) => (id) => {
        return state.users ? state.users.find(u => u.id === id) : ''
    },
    getUserIdsByName: (state) => (name) => {
        return state.users.reduce((acc, u) => {
            const userFound = u.name.toLowerCase().includes(name.toLowerCase())
            return userFound ? [...acc, u.id] : [...acc]
        }, [])
    }
}

const mutations = {
    setUsers: (state, payload) => {
        state.users = payload
    }
}

const actions = {
    getUsers ({ commit }) {
        commit('setUsers', [])

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
