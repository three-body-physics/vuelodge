<template>
<div class="ui inverted vertical masthead center aligned segment">
  <div class="ui container">
    <div class="ui secondary fixed menu" id="navbar">
      <div class="ui container">
        <a href="/home" class="active item" id="homeNav">Home</a>
        <a href="/home/new" class="item">New Post</a>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">
      Login
    </a>
        </div>
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
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Catamaran|Montserrat:300i');

#homeNav {
  color: rgb(144, 50, 4);
  font-weight: bold;
}

.masthead h1.ui.header {
  font-size: 2em;
  margin-top: 6em;
}

.masthead h2 {

  margin-bottom: 6em;
  font-size: 1.2em;
}

.menu {
  background: white;
}

#navbar {
  font-family: 'Catamaran', sans-serif;
  font-size: 1em;
  background: white;
}

.masthead {
  background: url("../assets/hero3.jpg") no-repeat center center fixed !important;
}
</style>
