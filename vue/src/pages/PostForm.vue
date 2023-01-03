<template>
  <div>
    <p>
      <RouterLink to="/" class="btn btn-outline-secondary">
        Go back to list
      </RouterLink>
    </p>
    <form @submit.prevent="onSubmit">
      <h1>{{ model.id ? "Edit Post" : "Create new Post" }}</h1>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="model.title"
          placeholder="Post Title"
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control"
          v-model="model.body"
          placeholder="Post Body"
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
import { ref, onMounted } from "vue";
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
  if (!route.params.id) {
    return;
  }
  model.value = await store.dispatch("getSinglePost", route.params.id);
});

function onSubmit() {
  store.dispatch("savePost", model.value).then(() => {
    router.push("/");
  });
}
</script>

<style></style>
