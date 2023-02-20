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
      這是前台
  <RouterLink to="/">HOME</RouterLink> |
  <RouterLink to="/about">ABOUT</RouterLink> |
  <RouterLink to="/products">products</RouterLink> |
  <RouterLink to="/cart">cart</RouterLink> |
  <RouterLink to="/login">登入後台</RouterLink>
  <hr />
  <RouterView></RouterView>
  </div>
</template>
