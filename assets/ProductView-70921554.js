import{_ as c,o as r,c as a,b as u,e as s,t as i,F as d}from"./index-5c2abb24.js";const{VITE_APP_URL:n,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"masaki",BASE_URL:"/vue-week6-vite/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:e}=this.$route.params;this.$http.get(`${n}/v2/api/${l}/product/${e}`).then(t=>{console.log("單一產品列表：",t.data.product),this.product=t.data.product})}},mounted(){this.getProduct()}},_={class:"text-center"},h=["src"];function m(e,t,P,g,o,f){return r(),a(d,null,[u("這是單一產品列表 "),s("h2",_,i(o.product.title),1),s("img",{src:o.product.imageUrl,class:"img-fuild d-block mx-auto",alt:""},null,8,h)],64)}const V=c(p,[["render",m]]);export{V as default};