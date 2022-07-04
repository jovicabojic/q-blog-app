<template>
  <section class="posts-list-section p-y-3">
    <div v-if="loadingPosts" class="wrapper">
      <ContentLoader/>
    </div>
    <div class="wrapper" v-else-if="getPostsByUserName.length > 0">
      <div class="column-row">
        <div v-for="(post, index) in getPostsByUserName"
             :key="`${index}-${post.id}`"
             class="column-3">
          <div class="card-wrapper">
            <p class="author-name">{{ getUserById(post.userId).name }}</p>
            <SinglePost :post="post"/>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper" v-else>
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
import {mapActions, mapGetters} from 'vuex'
import ContentLoader from '../common/ContentLoader'

export default {
  name: 'PostsList',
  data: () => ({}),
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
  mounted() {
    this.$store.dispatch("getPosts")
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.posts-list-section {
  .column-row {
    & .column-3 {
      margin-bottom: 20px;

      & .card-wrapper {
        box-shadow: 0 4px 20px rgba(0, 0, 0, .1);
        border-radius: 5px;
        overflow: hidden;
        height: 100%;

        & .author-name {
          background: $accent;
          color: $white;
          padding: 5px 10px;
          position: absolute;
          z-index: 1;
          top: 10px;
          left: 20px;
          border-radius: 5px;
          font-size: 15px;
        }
      }

      &:nth-child(5n + 1) {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
}
</style>

