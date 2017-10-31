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

    <div class="ui basic button" @click="postRequest">Submit</div>
  </form>

</div>
</template>

<script>

export default {
  data() {
    return {
      blog: {
        name: "Quebec",
        image: "https://i.imgur.com/GxHsX4H.jpg",
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      }
    }
  },

  methods: {
    postRequest() {
      var date = this.getTimeStamp();

      this.$http.post("/api/blogs", {name: this.blog.name, image: this.blog.image, text: this.blog.text, author: localStorage.getItem("username"), date: date}, {headers: {Authorization: "Bearer " + localStorage.getItem("JWTtoken")}}).then(function(res) {

        console.log(res);
        this.$router.push("/home");

      }, function(res) {

        console.log("Error Unauthorized");
        
      });

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
.container.segment {
  margin-top: 9em;
  margin-bottom: 6em;
}


</style>
