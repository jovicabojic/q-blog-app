<template>
  <div id="app"
       class="wrapper">
    <header-layout/>
    <router-view></router-view>
    <footer-layout/>
  </div>
</template>

<script>

import HeaderLayout from './components/layout/HeaderLayout'
import FooterLayout from './components/layout/FooterLayout'

export default {
  name: 'App',
  components: {
    FooterLayout,
    HeaderLayout
  }
}
</script>

<style src="./../src/assets/scss/main.scss" lang="scss"></style>

