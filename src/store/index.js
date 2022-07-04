import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import comments from "@/store/modules/comments";
import users from "@/store/modules/users";

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        posts,
        comments,
        users
    }
})