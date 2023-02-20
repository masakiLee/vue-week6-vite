<!-- eslint-disable vue/valid-v-on -->
<template>這是產品列表
  <table class="table">
    <tbody>
      <tr v-for="products in products" :key="products.id">
        <td>{{ products.title }}</td>
        <td><img :src="products.imageUrl"  :style="{width:'200px', height:'120px', objectFit: 'cover'}" alt="{{ products.title }}"></td>
        <td>
          <RouterLink :to="`/product/${products.id}`" class="btn btn-outline-primary">產品細節</RouterLink>
          <button type="button" class="btn btn-outline-danger" @click="addToCart(products.id)">加入購物車</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
        .then((response) => {
          console.log('產品列表：', response.data.products)
          this.products = response.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((response) => {
          console.log(response)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
