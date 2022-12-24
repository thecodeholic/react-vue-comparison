<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="text-end">
        <RouterLink :to="`/edit/${post.id}`" class="btn btn-primary me-2"
          >Edit</RouterLink
        >
        <button @click="onDeleteClick(post)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";


const store = useStore();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete"]);

function onDeleteClick(post) {
  if (!window.confirm("Are you sure you want to delete post?")) {
    return;
  }

  store.dispatch('deletePost', post.id)
}
</script>

<style lang="scss" scoped></style>
