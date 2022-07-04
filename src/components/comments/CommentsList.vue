<template>
  <section class="comments-section">
    <template v-if="loadingComments">
      <ContentLoader/>
    </template>
    <div class="column-row"
         v-else-if="comments">
      <div class="column-12">
        <h4>Comments:</h4>
      </div>
      <template v-if="comments.length > 1">
        <div class="column-12 m-b-2"
             v-for="(comment, index) in comments" :key="index">
          <p class="comment-username">{{ comment.email }}</p>
          <p class="comment-title">{{ comment.name }}</p>
          <p class="comment-text">{{ comment.body }}</p>
        </div>
      </template>
    </div>
    <template v-else>
      <div class="column-row">
        <div class="column-12 text-center" data-test-id="no-comments">
          Sorry, no comments in this post...
        </div>
      </div>
    </template>
  </section>
</template>

<script>

import ContentLoader from '@/components/common/ContentLoader'
import {mapGetters} from "vuex";

export default {
  name: "CommentsList",
  props: ['comments'],
  computed: {
    ...mapGetters([
      'loadingComments',
    ]),
  },
  components: {
    ContentLoader
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.comments-section {
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%);
  border-radius: 5px;

  & h4 {
    font-weight: bold;
  }

  & .comment-username {
    color: $accent;
    margin-bottom: 5px;
  }

  & .comment-title {
    text-transform: capitalize;
    font-weight: bold;
  }
}
</style>