<template>
  <p>
    <RouterLink to="/new" class="btn btn-success"> Add new </RouterLink>
  </p>
  <div>
    <PostItem
      v-for="post of postList"
      :key="post.id"
      :post="post"
      @delete="onDelete"
    >
    </PostItem>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PostItem from "../components/PostItem.vue";

const postList = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      postList.value = posts;
    });
});

function onDelete(post) {
  postList.value = postList.value.filter((p) => p.id != post.id);
}
</script>

<style lang="scss" scoped></style>
