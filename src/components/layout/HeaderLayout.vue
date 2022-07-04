<template>
  <div class="column-row">
    <div class="column-4">
      <router-link class="nav-link"
                   active-class="active"
                   exact
                   tag="a"
                   to="/">
        <img src="../../assets/img/logo.png" alt="logo"
             class="logo"/>
      </router-link>
    </div>
    <div class="column-8">
      <ul class="nav justify-content-end">
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderLayout',
  data: () => ({
  })
}
</script>
