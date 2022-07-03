<template>
  <div>
    <template v-if="loadingPosts">
      <ContentLoader/>
    </template>
    <template v-else-if="post">
      <div class="row mb-4 pb-5 border-bottom">
        <div class="col-sm-3">
          <img src="../assets/img/single-post.jpeg"
               class="rounded-circle w-100"
               alt="Post image"/>
        </div>
        <div class="col-sm-9">
          <p><span class="text-secondary">Title: </span>{{post.title}}</p>
          <p><span class="text-secondary">Body: </span> {{post.body}}</p>
        </div>
      </div>
      <div class="row"
           v-if="comments">
        <div class="col-sm-12">
          <h4>Comments:</h4>
        </div>
        <template v-if="comments.length > 1">
          <div class="col-sm-3"
               v-for="(comment, index) in comments" :key="index">
            <p class="text-secondary mb-0">Comment number: {{index}}</p>
            <p>{{comment.email}}</p>
            <p>{{comment.name}}</p>
            <p>{{comment.body}}</p>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="col-sm-12 text-center">
          Sorry, no post with this id...
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ContentLoader from '../components/common/ContentLoader'

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
    ContentLoader
  },
  methods: {
    ...mapMutations(['setPost'])
  },
  mounted () {
    // this.getPost(this.$route.params.id)
    this.$store.dispatch("getPost", this.$route.params.id)
  }
}
</script>
