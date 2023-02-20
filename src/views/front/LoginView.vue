<template>這是需要登入畫面
    <form id="form" class="form-signin">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" placeholder="name@example.com"
                v-model="user.username" required autofocus>
            <label for="username">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password"
                v-model="user.password" required>
            <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" @click.prevent="login">
            登入
        </button>
    </form>
</template>

<script>

const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_APP_URL}/v2/admin/signin`
      this.$http
        .post(url, this.user)
        .then(function (response) {
          console.log(response)
          const { token, expired } = response.data
          //  token 加入 cookie expires 設置 cookie 有效時間
          document.cookie = `loginToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>
