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

const route = useRoute();
const router = useRouter();

const model = ref({
  id: "",
  title: "",
  body: "",
});

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts/" + route.params.id)
    .then((res) => res.json())
    .then((post) => {
      model.value = post;
    });
});

function onSubmit() {
  if (model.value.id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + model.value.id, {
      method: "PUT",
      body: JSON.stringify(model.value),
    })
      .then((res) => res.json())
      .then((res) => {
        router.push("/");
      });
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(model.value),
    })
      .then((res) => res.json())
      .then((res) => {
        router.push("/");
      });
  }
}
</script>

<style lang="scss" scoped></style>
