<template>
  <div class="post-item">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ post.body }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="scss" scoped>

</style>