<template>
  <div class="row">
    <div class="col-md-12">
      {{users}}
      <SearchSection/>
      <PostsList/>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import SearchSection from '../components/SearchSection'
import PostsList from '../components/posts/PostsList'

export default {
  name: 'PostsListPage',
  components: {
    PostsList,
    SearchSection
  },
  computed: {
    users() {
      return this.$store.getters["users"];
    }
  },
  mounted() {
    this.$store.dispatch("getUsers")
  },
  methods: {
    ...mapMutations(['setPosts'])
  }
}
</script>
