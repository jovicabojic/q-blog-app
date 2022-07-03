<template>
  <section>
    <div v-if="loadingPosts">
      <ContentLoader/>
    </div>
    <section v-else-if="posts && posts.length > 0">
      <div class="column-row">
        <div v-for="(post, index) in posts"
             :key="`${index}-${post.id}`"
             class="column-3">
          <p>{{post.userId}}</p>
          <SinglePost :post="post"/>
        </div>
      </div>
    </section>
    <div v-else>
      <div class="row">
        <div class="col-md-12 text-center"
             data-test-id="no-posts">
          Sorry, no posts...
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import SinglePost from './SinglePost'
import { mapActions, mapGetters } from 'vuex'
import ContentLoader from '../common/ContentLoader'

export default {
  name: 'PostsList',
  data: () => ({
  }),
  components: {
    ContentLoader,
    SinglePost
  },
  computed: {
    ...mapGetters({
      posts: 'posts',
      loadingPosts: 'loadingPosts',
    }),
    userName() {
      return this.$store.getters["userName"];
    }
  },
  methods: {
    ...mapActions(['getPosts']),
    ...mapActions(['getPost']),
    ...mapActions(['getUsername']),
  },
  mounted () {
    this.getPosts();
  }
}
</script>

