import{_ as h,a as m,r as P,o as s,c as n,b as c,e as t,F as d,f as b,t as g,d as k,w as $}from"./index-52cfe167.js";const{VITE_APP_URL:i,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"masaki",BASE_URL:"/vue-week6-vite/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{products:[]}},components:{RouterLink:m},methods:{getProducts(){this.$http.get(`${i}/v2/api/${l}/products`).then(e=>{console.log("產品列表：",e.data.products),this.products=e.data.products})},addToCart(e){const a={product_id:e,qty:1};this.$http.post(`${i}/v2/api/${l}/cart`,{data:a}).then(r=>{console.log(r)})}},mounted(){this.getProducts()}},T={class:"table"},V=["src"],v=["onClick"];function x(e,a,r,E,u,_){const p=P("RouterLink");return s(),n(d,null,[c("這是產品列表 "),t("table",T,[t("tbody",null,[(s(!0),n(d,null,b(u.products,o=>(s(),n("tr",{key:o.id},[t("td",null,g(o.title),1),t("td",null,[t("img",{src:o.imageUrl,style:{width:"200px",height:"120px",objectFit:"cover"},alt:"{{ products.title }}"},null,8,V)]),t("td",null,[k(p,{to:`/product/${o.id}`,class:"btn btn-outline-primary"},{default:$(()=>[c("產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:y=>_.addToCart(o.id)},"加入購物車",8,v)])]))),128))])])],64)}const L=h(f,[["render",x]]);export{L as default};
