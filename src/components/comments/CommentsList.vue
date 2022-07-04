<template>
  <section class="wrapper">
    <div class="column-row"
         v-if="comments">
      <div class="column-12">
        <h4>Comments:</h4>
      </div>
      <template v-if="comments.length > 1">
        <div class="column-3"
             v-for="(comment, index) in comments" :key="index">
          <p class="text-secondary mb-0">Comment number: {{index}}</p>
          <p>{{comment.email}}</p>
          <p>{{comment.name}}</p>
          <p>{{comment.body}}</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "CommentsList",
  props: ['comments']
}
</script>