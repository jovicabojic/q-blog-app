<template>
  <section class="search-section d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <div class="column-row">
        <div class="column-12">
          <h2 class="text-center">
            Type something to search...
          </h2>
          <SearchBar/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SearchBar from './common/SearchBar'

export default {
  name: 'SearchSection',
  components: {SearchBar},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/colors";

.search-section {
  background: url("../assets/img/search-section-background.jpg") bottom center no-repeat;
  background-size: cover;
  min-height: 300px;

  & h2 {
    color: $white;
    font-weight: 500;
  }

}
</style>
