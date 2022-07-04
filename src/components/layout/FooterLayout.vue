<template>
  <footer class="p-y-1 p-x-1 d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <div class="column-row">
        <div class="column-12">
          <div class="footer-copyright text-center">
            © 2022 Copyright: <a href="mailto:bojic.jovica@hotmail.com"> bojic.jovica@hotmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterLayout',
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

footer {
  background: $black;
  color: $white;
  height: 50px;
  box-sizing: border-box;

  & a {
    color: rgba($light, .5);
    text-decoration: none;

    &:hover {
      color: rgba($light, 1);
      text-decoration: underline;
    }
  }
}
</style>
