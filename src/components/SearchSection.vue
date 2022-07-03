<template>
  <section>
    <div class="row">
      <div class="col-md-12 search-section">
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h2 class="mb-4">
              Type something name to search...
            </h2>
            <div class="row">
              <SearchBar :submit="submitSearch"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
import SearchBar from './common/SearchBar'

export default {
  name: 'SearchSection',
  components: { SearchBar },
  methods: {
    ...mapActions(['getPosts']),
    submitSearch (query) {
      this.getPosts([query])
    }
  }
}
</script>
