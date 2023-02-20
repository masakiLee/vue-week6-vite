<template>這是單一產品列表
<h2 class="text-center">{{ product.title }}</h2>
<img :src="product.imageUrl" class="img-fuild d-block mx-auto"  alt="">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route.params)// 拿出 id值
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((response) => {
          console.log('單一產品列表：', response.data.product)
          this.product = response.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
