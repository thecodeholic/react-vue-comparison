<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h1>Create new Post</h1>
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
        <button :disabled="!model.title || !model.body" class="btn btn-success" type="submit">Submit</button>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const router = useRouter();

const model = ref({
  title: "",
  body: "",
});

function onSubmit() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(model.value),
  })
    .then((res) => res.json())
    .then((res) => {
      router.push('/')
    });
}
</script>

<style lang="scss" scoped></style>
