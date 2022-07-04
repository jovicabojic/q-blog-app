<template>
  <section class="wrapper-fullwidth">
    <div class="column-row">
      <div class="column-12">
        <SearchSection/>
        <PostsList/>
      </div>
    </div>
  </section>
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
