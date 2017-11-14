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
// import body from "@/components/body"
// import create from "@/components/create"



export default {

  components: {

    "app-footer": footer,
    "app-gallery": gallery
    // "app-body": body,
    // "app-create": create
  }

}
</script>



<style scoped>

.postbody-enter-active, .post-body-leave-active {
  transition: all 1s;
}

.postbody-enter, .post-body-leave-to {
  opacity: 0;
  
}


</style>
