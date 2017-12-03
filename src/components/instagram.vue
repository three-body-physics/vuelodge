<template>
<transition name="postbody" appear>
<div class="ui equal width centered stackable grid">
  <div class="center aligned row">
    <div class="eight wide middle aligned column">
      <a href="https://www.instagram.com/"><i class="fa fa-instagram fa-5x"></i></a>
      <h3>Follow us on Instagram</h3>
      <div class="ui divider">

      </div>
      <p>@myPixelWindow</p>

    </div>
    <div class="six wide middle aligned column">
      <div class="ui small images">
        <img src="../assets/s5.jpg" class="ui tiny image">
        <img src="../assets/s10.jpg" class="ui tiny image">
        <img src="../assets/s9.jpg" class="ui tiny image">
        <img src="../assets/s7.jpg" class="ui tiny image">
        <img src="../assets/s6.jpg" class="ui tiny image">
        <img src="../assets/s8.jpg" class="ui tiny image">
        <img src="../assets/s13.jpg" class="ui tiny image">
        <img src="../assets/s2.jpg" class="ui tiny image">
        <img src="../assets/s12.jpg" class="ui tiny image">

      </div>
    </div>
  </div>

</div>
</transition>
</template>

<script>
export default {}
</script>

<style scoped lang="css">

@import url('https://fonts.googleapis.com/css?family=Catamaran|Montserrat:300i');

.grid {
  background: white;
}

h3 {
  font-family: 'Catamaran', sans-serif;
  text-transform: uppercase;
  -webkit-text-transform: uppercase;
  font-size: 2em;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
}

.fa {
  color: black;
}

.column {
  padding-top: 4em;
  padding-bottom: 4em;
}

.postbody-enter-active, .post-body-leave-active {
  -o-transition: all 1s;
  transition: all 1s;
  -webkit-transition: all 1s;
}

.postbody-enter, .post-body-leave-to {
  opacity: 0;
  
}
</style>
