<template>
  <header class="wrapper p-y-1">
    <div class="column-row">
      <div class="column-12">
        <router-link class="nav-link"
                     active-class="active"
                     exact
                     tag="a"
                     to="/">
          <img src="../../assets/img/logo.png" alt="logo"
               class="logo"/>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderLayout',
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
.logo {
  width: 50px;
}
</style>
