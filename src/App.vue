<template>
<div id="app">

  <app-header></app-header>
  <router-view></router-view>

</div>
</template>

<script>
import header from "@/components/header"
// import body from "@/components/body"
// import create from "@/components/create"

export default {

  components: {
    "app-header": header,
    // "app-body": body,
    // "app-create": create
  }

}
</script>

<style scoped>
</style>
