<template>
  <div class="row my-3">
    <div class="col-12 text-center">
      <div class="spinner-border"
           role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentLoader'
}
</script>

<style lang="scss" scoped>
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: text-bottom;
  border: 4px solid #000;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;

  & .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
</style>