<template>
  <div class="row">
    <div class="col-md-12">
      <SearchSection/>
      <PostsList/>
    </div>
  </div>
</template>
<script>
import SearchSection from '../components/SearchSection'
import PostsList from '../components/posts/PostsList'

export default {
  name: 'PostsListPage',
  components: {
    PostsList,
    SearchSection
  },
  mounted() {
    this.$store.dispatch("getUsers")
  }
}
</script>
