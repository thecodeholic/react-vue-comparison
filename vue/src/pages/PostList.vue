<template>
  <div>
    <PostItem v-for="post of postList" :key="post.id" :post="post">
    </PostItem>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PostItem from '../components/PostItem.vue';

const postList = ref([])

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      postList.value = posts
    })
})

</script>

<style lang="scss" scoped>

</style>