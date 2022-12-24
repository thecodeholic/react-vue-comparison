<template>
  <div>
    <p>
      <RouterLink to="/" class="btn btn-outline-secondary">
        Back to Posts
      </RouterLink>
    </p>
    <form @submit.prevent="onSubmit">
      <h1>{{ model.id ? "Edit Post" : "Create new Post" }}</h1>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Post Title"
          v-model="model.title"
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control"
          placeholder="Post Body"
          v-model="model.body"
        ></textarea>
      </div>
      <p>
        <button
          :disabled="!model.title || !model.body"
          class="btn btn-success"
          type="submit"
        >
          Submit
        </button>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

const model = ref({
  id: "",
  title: "",
  body: "",
});

onMounted(async () => {
  model.value = await store.dispatch('getSinglePost', route.params.id);
});

function onSubmit() {
  store.dispatch('savePost', model.value)
    .then(() => {
      router.push('/')
    })
}
</script>

<style lang="scss" scoped></style>
