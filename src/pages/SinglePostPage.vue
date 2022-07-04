<template>
  <section class="single-post-section p-y-3">
    <div class="wrapper">
      <template v-if="post">
        <div class="column-row">
          <div class="column-4">
            <img src="../assets/img/single-post.jpeg"
                 class="rounded-circle w-100"
                 alt="Post image"/>
          </div>
          <div class="column-8">
            <article>
              <h3 class="m-b-1">{{ post.title }}</h3>
              <p>{{ post.body }}</p>
            </article>
          </div>
          <CommentsList :comments="comments"></CommentsList>
        </div>
      </template>
      <template v-else>
        <div class="column-row">
          <div class="column-12 text-center">
            Sorry, no post with this id...
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import CommentsList from "@/components/comments/CommentsList";

export default {
  name: 'SinglePostPage',
  computed: {
    ...mapGetters({
      post: 'post'
    }),
    comments() {
      return this.$store.getters["comments"];
    }
  },
  components: {
    CommentsList
  },
  methods: {
    ...mapMutations(['setPost'])
  },
  mounted() {
    this.$store.dispatch("getPost", this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
article {
  & h3 {
    text-transform: capitalize;
    font-weight: 500;
  }
}
</style>
