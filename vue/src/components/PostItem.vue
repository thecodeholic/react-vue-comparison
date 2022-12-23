<template>
  <div>
    <pre>{{ props }}</pre>
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