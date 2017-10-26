<template>
<div class="ui main text container segment">
  <div class="ui huge header">Create New Post</div>

  <form class="ui form">
    <div class="field">
      <label>Title</label>
      <input type="text" v-model="blog.name" placeholder="Title">
    </div>
    <div class="field">
      <label>Image</label>
      <input type="text" v-model="blog.image" placeholder="Image url">
    </div>
    <div class="field">
      <label>Blog Content</label>
      <textarea v-model="blog.text" placeholder="Type something here"></textarea>
    </div>

    <button class="ui basic button" @click="postRequest">Submit</button>
  </form>

</div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        name: "",
        image: "",
        text: ""
      }
    }
  },

  methods: {
    postRequest() {
      var date = this.getTimeStamp();

      this.$http.post("/api/blogs", {name: this.blog.name, image: this.blog.image, text: this.blog.text, date: date}).then(function(res) {

        console.log(res);

      });

        this.$router.push("/home");

    },

    getTimeStamp() {
      var now = new Date();
      var day = now.getDate();
      var month = now.getMonth() + 1;
      var year = now.getFullYear();

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return day + "/" + month + "/" + year;


    }


    }
  }


</script>

<style scoped>
.container {
  margin-top: 6em;
  margin-bottom: 6em;
}
</style>
