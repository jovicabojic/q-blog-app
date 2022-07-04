<template>
  <div class="input-group">
    <form @submit.prevent="submitSearch">
      <div class="form-group">
        <input type="text"
               class="input-field"
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
    submitSearch() {
      this.setSearch(this.query)
    },
    clearSearch() {
      this.query = ''
      this.setSearch(this.query)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.input-group {
  & form {
    & .form-group {
      max-width: 250px;
      margin: 0 auto;
      position: relative;

      .input-field {
        background: $light;
        border-radius: 25px;
        color: $dark;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        border: none;
        padding: 5px 10px;
        height: 36px;

        &:focus-visible {
          box-shadow: none;
          outline: none;
        }
      }

      & .material-icons {
        position: absolute;
        right: 10px;
        top: 6px;
      }
    }
  }
}
</style>
