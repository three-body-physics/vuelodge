<template>

  <div class="pusher">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui container">
        <div class="ui massive fixed menu">
          <div class="ui container">
            <div class="header item" id="logo">iTravelLog</div>
            <a href="/home" class="item" id="homeNav">Home</a>
            <a href="/home/new" class="item">New Post</a>
          </div>
        </div>
      </div>

      <div class="ui text container">
        <h1 class="ui inverted header">
          Welcome to my travel blog!
        </h1>
        <h2>Leave a comment if you see something you like!</h2>

      </div>

    </div>
  </div>

</template>

<script>
export default {}
</script>

<style scoped>

#homeNav {
  color: rgb(144, 50, 4);
  font-weight: bold;
}

.masthead h1.ui.header {
  font-size: 3em;
  margin-top: 3em;

}

.masthead h2 {

  margin-bottom: 3em;

}

.masthead {
    background: url("https://i.redd.it/ynd6hnuul0nz.jpg") !important;
}


</style>
