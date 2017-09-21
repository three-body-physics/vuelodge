<template>
<div>

  <app-header></app-header>
  <router-view></router-view>

</div>
</template>

<script>

import header from "./header.vue"
import body from "./body.vue"
import create from "./create.vue"

export default {

  components: {
    "app-header": header,
    "app-body": body,
    "app-create": create
  }

}
</script>

<style scoped>
</style>
