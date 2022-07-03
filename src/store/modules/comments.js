import axios from 'axios'

const state = {
    comments: null
}

const getters = {
    comments (state) {
        return state.comments
    }
}

const mutations = {
    setComments: (state, payload) => {
        state.comments = payload
    }
}

const actions = {
    getComments ({ commit }, id) {
        console.log(id)
        commit('setComments', null)

        axios.get('comments?postId=' + id)
            .then(response => {
                console.log(response.data)
                commit('setComments', response.data)
            })
            .catch(err => {
                console.log('Error occurred getComments:', err)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
