<template>
<div id="app">

  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>

</div>
</template>

<script>
import header from "@/components/header"
import footer from "@/components/footer"
// import body from "@/components/body"
// import create from "@/components/create"

export default {

  components: {
    "app-header": header,
    "app-footer": footer
    // "app-body": body,
    // "app-create": create
  }

}
</script>

<style scoped>
</style>
