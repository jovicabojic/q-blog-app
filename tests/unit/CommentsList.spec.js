import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import router from '@/router'
import ContentLoader from '../../src/components/common/ContentLoader'
import CommentsList from "@/components/comments/CommentsList";

const localVue = new createLocalVue()
localVue.use(Vuex)

let store
let wrapper

describe('CommentsList component', () => {
    it('Renders loader while getting the data', () => {
        let actions = {
            getComments: jest.fn()
        }
        let getters = {
            loadingComments: () => true,
            comments: jest.fn()
        }
        let state = {
            loadingComments: true,
            comments: []
        }

        store = new Vuex.Store({
            actions,
            getters,
            state
        })

        wrapper = shallowMount(CommentsList, {
            localVue,
            store,
            router
        })

        expect(wrapper.findComponent(ContentLoader).exists())
            .toBe(true)
    })

    it('Shows there is no results', () => {
        let actions = {
            getComments: jest.fn()
        }
        let getters = {
            loadingComments: () => true,
            comments: () => {
            }
        }
        let state = {}

        store = new Vuex.Store({
            actions,
            getters,
            state
        })

        wrapper = shallowMount(CommentsList, {
            store,
            localVue,
            router
        })

        expect(wrapper.find('[data-test-id="no-comments"]').text())
            .toBe('Sorry, no comments in this post...')
    })
})
