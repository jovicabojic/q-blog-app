import axios from 'axios'
import comments from "@/store/modules/comments";

const state = {
    posts: null,
    post: null,
    loadingPosts: false
}

const getters = {
    posts (state) {
        return state.posts
    },
    post (state) {
      return state.post
    },
    loadingPosts (state) {
        return state.loadingPosts
    }
}

const mutations = {
    setPosts: (state, payload) => {
        state.posts = payload
    },
    setPost: (state, payload) => {
        state.post = payload
    },
    setLoadingPosts: (state, payload) => {
        state.loadingPosts = payload
    }
}

const actions = {
    getPosts ({ commit }) {
        commit('setPosts', null)
        commit('setLoadingPosts', true)

        axios.get('/posts')
            .then(response => {
                commit('setPosts', response.data)
            })
            .catch(error => {
                console.log('Error occurred:', error)
            })
            .finally(() => {
                commit('setLoadingPosts', false)
            })
    },
    getPost ({ commit }, id) {
        commit('setPost', null)
        commit('setLoadingPosts', true)

        axios.get(`/posts/${id}`)
            .then(res => {
                commit('setPost', res.data)
                const postId = res.data.id
                comments.actions.getComments({ commit }, postId)
            })
            .catch(e => {
                console.log('Error occurred getPost:', e)
            })
            .finally(() => {
                commit('setLoadingPosts', false)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
