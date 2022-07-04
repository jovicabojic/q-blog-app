import axios from 'axios'
import comments from "@/store/modules/comments";

const state = {
    search: '',
    posts: [],
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
    },
    getPostsByUserName: (state, rootGetters) => {
        return state.posts.filter(post => rootGetters.getUserIdsByName(state.search).includes( post.userId))
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
    },
    setSearch: (state, payload) => {
        state.search = payload
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
            .catch(error => {
                console.log('Error occurred getPost:', error)
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
