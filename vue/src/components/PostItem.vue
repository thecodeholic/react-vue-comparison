<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="text-end">
        <button class="btn btn-primary me-2">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
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