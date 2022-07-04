import axios from 'axios'

const state = {
    comments: [],
    loadingComments: false
}

const getters = {
    comments(state) {
        return state.comments
    },
    loadingComments(state) {
        return state.loadingComments
    },
}

const mutations = {
    setComments: (state, payload) => {
        state.comments = payload
    },
    setLoadingComments: (state, payload) => {
        state.loadingComments = payload
    },
}

const actions = {
    getComments({commit}, id) {
        commit('setComments', [])
        commit('setLoadingComments', true)

        axios.get('comments?postId=' + id)
            .then(response => {
                commit('setComments', response.data)
            })
            .catch(err => {
                console.log('Error occurred getComments:', err)
            })
            .finally(() => {
                commit('setLoadingComments', false)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
