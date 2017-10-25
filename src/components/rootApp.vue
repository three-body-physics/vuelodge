<template>
<div>

  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>


</div>
</template>

<script>

import header from "./header.vue"
import body from "./body.vue"
import create from "./create.vue"
import footer from "./footer.vue"

export default {

  components: {
    "app-header": header,
    "app-body": body,
    "app-create": create,
    "app-footer": footer
  }

}
</script>

<style scoped>
</style>
