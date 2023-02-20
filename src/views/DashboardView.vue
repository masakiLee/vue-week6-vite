<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<template>
  <div class="container">
      這是後台
  <RouterLink to="/">回前台</RouterLink> |
  <RouterLink to="/admin/products">products</RouterLink> |
  <RouterLink to="/admin/orders">orders</RouterLink> |
  <hr />
  <RouterView></RouterView>
  </div>
</template>
