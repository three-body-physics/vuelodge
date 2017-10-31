<template>
<div id="app">


  <router-view></router-view>
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
</style>
