import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
    ]
  },
  actions: {
    deletePost({ state, commit }, id) {
      commit(
        'setPosts',
        state.posts.filter(p => p.id != id)
      )
    },
    getSinglePost({ state }, id) {
      return state.posts.find(p => p.id == id)
    },
    savePost({ state, commit }, post) {
      let newPosts = state.posts;
      if (post.id) {
        newPosts = posts.map(p => {
          if (p.id == post.id) {
            return post;
          }
          return p;
        })
      } else {
        newPosts.push(post);
      }
      commit('setPosts', newPosts)
    }
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    }
  }
})

export default store;