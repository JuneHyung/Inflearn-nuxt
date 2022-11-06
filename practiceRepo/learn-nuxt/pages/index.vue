<template>
  <div class="app">
    <main>
      <div>
        <!-- <SearchInput 
          :search-keyword="searchKeyword"
          @input="updateSearchKeyword"></SearchInput> -->
          <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img 
            class="product-image"
            :src="product.imageUrl" 
            :alt="product.name"/>
          <p>{{product.name}}</p>
          <span>{{product.price}}</span>
        </li>
      </ul>
      <button class="cart-list-button" @click="moveToCart">Cart</button>
    </main>
  </div>
</template>

<script>
// import axios from 'axios';
import SearchInput from '~/components/SearchInput.vue';
import { fetchProducts, fetchProductsByKeyword } from '~/api';

export default {
  components: { SearchInput },
  async asyncData(){
    const response = await fetchProducts();
    // console.log(response);
    const products = response.data.map(item=>({
      ...item, 
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }));
    return {products};
  },
  data(){
    return{
      searchKeyword: '',
    }
  },
  methods:{
    moveToDetailPage(id){
      // console.log(id)
      this.$router.push(`detail/${id}`);
    },
    // updateSearchKeyword(keyword){
    //   this.searchKeyword = keyword;
    // }
    async searchProducts(){
      
      const response = await fetchProductsByKeyword(this.searchKeyword);
      // console.log(response);
      this.products = response.data.map(item=>({
        ...item, 
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }));
    },
    moveToCart(){
      this.$router.push(`cart`)
    }
  }
  // data(){
  //   return{
  //     products:[],
  //   }
  // },

  // async created(){
  //   const response =    await axios.get('http://localhost:3000/products');
  //   console.log(response);
  //   this.products = response.data;
  // }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}


.cart-list-button{
  width:100px;
  height:100px;
  position:fixed;
  bottom:20px;
  right:20px;
  border:none;
  border-radius:50%;
  background-color:#00c58c;
  opacity:0.5;
  transition:all 0.5s;
  color:#fff;
  font-weight:900;
  font-size:24px;
  cursor: pointer;
}
.cart-list-button:hover{
  opacity:1;
}
</style>