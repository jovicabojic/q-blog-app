<template>
  <section>
    <div v-if="loadingPosts">
      <ContentLoader/>
    </div>
    <section v-else-if="getPostsByUserName.length > 0">
      <div class="column-row">
        <div v-for="(post, index) in getPostsByUserName"
             :key="`${index}-${post.id}`"
             class="column-3">
          <p>{{getUserById(post.userId).name}}</p>
          <SinglePost :post="post"/>
        </div>
      </div>
    </section>
    <div v-else>
      <div class="column-row">
        <div class="column-12 text-center">
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
    ...mapGetters([
      'posts',
      'loadingPosts',
      'getUserById',
      'getPostsByUserName'
    ]),
  },
  methods: {
    ...mapActions(['getPosts']),
    ...mapActions(['getPost'])
  },
  mounted () {
    this.getPosts();
  }
}
</script>

