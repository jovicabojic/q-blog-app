<template>
  <header class="p-y-1">
    <div class="wrapper">
      <div class="column-row">
        <div class="column-12 d-flex justify-content-center align-items-center">
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
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderLayout',
  data: () => ({})
}
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 4px 20px rgb(0 0 0 / 10%);
  height: 80px;
  box-sizing: border-box
}

.logo {
  width: 50px;
}
</style>
