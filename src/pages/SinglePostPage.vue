<template>
  <div>
    <template v-if="loadingPosts">
      <ContentLoader/>
    </template>
    <template v-else-if="post">
      <div class="column-row">
        <div class="column-3">
          <img src="../assets/img/single-post.jpeg"
               class="rounded-circle w-100"
               alt="Post image"/>
        </div>
        <div class="column-9">
          <article>
            <p><span class="text-secondary">Title: </span>{{post.title}}</p>
            <p><span class="text-secondary">Body: </span> {{post.body}}</p>
          </article>
        </div>
      </div>
      <comments-list :comments="comments"></comments-list>
    </template>
    <template v-else>
      <div class="column-row">
        <div class="column-12 text-center">
          Sorry, no post with this id...
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ContentLoader from '../components/common/ContentLoader'
import CommentsList from "@/components/comments/CommentsList";

export default {
  name: 'SinglePostPage',
  computed: {
    ...mapGetters({
      post: 'post',
      loadingPosts: 'loadingPosts'
    }),
    comments() {
      return this.$store.getters["comments"];
    }
  },
  components: {
    ContentLoader,
    CommentsList
  },
  methods: {
    ...mapMutations(['setPost'])
  },
  mounted () {
    this.$store.dispatch("getPost", this.$route.params.id)
  }
}
</script>
