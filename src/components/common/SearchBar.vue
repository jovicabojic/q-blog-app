<template>
  <div class="input-group">
    <form class="col-md-6 offset-md-3"
          @submit.prevent="submitSearch">
      <div class="form-group">
        <input type="text"
               class="form-control"
               placeholder="Search..."
               aria-label="Search..."
               v-model="query"/>
        <span class="material-icons"
              v-if="query"
              @click="clearSearch">close</span>
        <span class="material-icons"
              v-else
              @click="submitSearch">search</span>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'SearchBar',
  data: () => ({
    query: ''
  }),
  computed: {
    ...mapGetters([
      'getPostsByUserName',
    ]),
  },
  methods: {
    ...mapMutations(['setSearch']),
    ...mapActions(['getPosts']),
    submitSearch () {
      this.setSearch(this.query)
    },
    clearSearch () {
      this.query = ''
      this.setSearch(this.query)
    }
  }
}
</script>
