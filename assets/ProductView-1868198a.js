import{_ as c,o as r,c as a,b as u,e as s,t as d,F as i}from"./index-9cdd37d1.js";const{VITE_APP_URL:n,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"masaki",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:o}=this.$route.params;this.$http.get(`${n}/v2/api/${l}/product/${o}`).then(t=>{console.log("單一產品列表：",t.data.product),this.product=t.data.product})}},mounted(){this.getProduct()}},_={class:"text-center"},h=["src"];function m(o,t,P,g,e,f){return r(),a(i,null,[u("這是單一產品列表 "),s("h2",_,d(e.product.title),1),s("img",{src:e.product.imageUrl,class:"img-fuild d-block mx-auto",alt:""},null,8,h)],64)}const V=c(p,[["render",m]]);export{V as default};