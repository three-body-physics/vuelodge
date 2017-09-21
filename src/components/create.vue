<template>
<div class="ui main text container segment">
  <div class="ui huge header">Create New Post</div>

  <form class="" action="index.html" method="post">

  </form>

  <form class="ui form">
    <div class="field">
      <label>Title</label>
      <input type="text" v-model="blog.name" placeholder="name">
    </div>
    <div class="field">
      <label>Image</label>
      <input type="text" v-model="blog.image">
    </div>
    <div class="field">
      <label>Blog Content</label>
      <textarea v-model="blog.text"></textarea>
    </div>

    <button class="ui basic button" @click="postRequest">Submit</button>
  </form>

  <div class="ui divider"></div>

  <p v-html="blog.text"></p>


</div>
</template>

<script>


export default {
  data() {
    return {
      blog: {
        name: "gray",
        image: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",
        text: "hi i'm gray."
      }
    }
  },

  methods: {
    postRequest() {

      this.$http.post("/api/blogs", {name: this.blog.name, image: this.blog.image, text: this.blog.text}, function(res) {

        console.log(res);
      });

      this.$router.push("/home");

    },


    }
  }


</script>

<style scoped>
.container {
  margin-top: 9em;
}
</style>
