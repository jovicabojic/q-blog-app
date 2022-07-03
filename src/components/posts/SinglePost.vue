<template>
  <div class="card">
    <img class="card-img-top"
         style="object-fit: cover;width: 100%;height: 200px;"
         src="../../assets/img/single-post.jpeg"
         alt="Post image">
    <div class="card-body">
      <h5 class="card-title">{{post.title && post.title}}</h5>
      <p class="card-text">{{post.body && post.body}}</p>
      <router-link tag="a"
                   :to="`/posts/${post.id}`"
                   class="btn btn-primary">Read more
      </router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SinglePost',
  props: ['post']
}
</script>

