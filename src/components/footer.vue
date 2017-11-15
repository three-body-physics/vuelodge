<template>
<transition name="postbody" appear>
  <div class="ui verticle footer">
    <div class="ui container">
      <div class="ui stackable divided equal height stackable center aligned grid">
        <div class="column">
          <a href="#"><i class="fa fa-envelope"></i></a>
          <a href="https://github.com/three-body-physics"><i class="fa fa-github-alt"></i></a>
          <a href="#"><i class="fa fa-mobile"></i></a>
          <p>Creation of TBP © 2017</p>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

i {
  font-size: 3em;
  display: inline-block;
  color: black;
  margin: 0.5em 0.2em 0.2em 0.2em;
}

p {
  margin-bottom: 1em;
}

.postbody-enter-active, .post-body-leave-active {
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}

.postbody-enter, .post-body-leave-to {
  opacity: 0;
  
}
</style>
