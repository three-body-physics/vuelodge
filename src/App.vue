<template>
<div id="app">

  <transition name="postbody" appear>
    <router-view></router-view>
  </transition>
    <app-gallery></app-gallery>
    <app-footer></app-footer>

</div>
</template>

<script>

import footer from "@/components/footer"
import gallery from "@/components/instagram"

export default {

  components: {

    "app-footer": footer,
    "app-gallery": gallery

  }

}
</script>

<style scoped>

.postbody-enter-active, .post-body-leave-active {
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}

.postbody-enter, .post-body-leave-to {
  opacity: 0;
  
}

</style>
