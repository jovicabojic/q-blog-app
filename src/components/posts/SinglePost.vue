<template>
  <div class="card">
    <router-link tag="a"
                 :to="`/posts/${post.id}`"
                 class="read-more">
      <div class="featured-post-image m-b-1">
        <img src="../../assets/img/single-post.jpeg"
             alt="Post image">
        <div class="mask"></div>
      </div>
      <div class="card-body">
        <h5 class="card-title m-b-1">{{ post.title && post.title }}</h5>
        <p class="card-text">{{ post.body && post.body }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>

export default {
  name: 'SinglePost',
  props: ['post']
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.card {
  & .read-more {
    text-decoration: none;
  }

  .featured-post-image {
    transition-duration: 0.7s;
    position: relative;
    overflow: hidden;

    & img {
      width: 100%;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
      transition-duration: 0.7s;
    }

    & .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      transition-duration: 0.7s;
    }

    &:hover {
      & img {
        transform: scale(1.3);
        cursor: pointer;
        transition-duration: 0.7s;
      }
    }
  }

  & .card-body {
    padding: 5px 15px 15px 15px;

    & .card-title {
      font-weight: bold;
      line-height: 22px;
      text-transform: capitalize;
      color: $dark;
    }

    & .card-text {
      color: $dark;
    }
  }
}

</style>

