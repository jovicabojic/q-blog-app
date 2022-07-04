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
        <span class="btn-search btn-close-icon position-absolute"
              v-if="query"
              @click="clearSearch"></span>
        <span class="btn-search btn-magnifier-icon position-absolute"
              v-else
              @click="submitSearch"></span>
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
      console.log(this.getPostsByUserName)
    },
    clearSearch () {
      this.query = ''
      this.setSearch(this.query)
    }
  }
}
</script>
