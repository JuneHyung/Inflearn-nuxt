<template>
  <div>
    <header class="title">
        <NuxtLink to="/" class="logo">Nuxt Shopping</NuxtLink>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  // created(){
  //   console.log(this.$route);
  // }
}
</script>

<style scoped>
/* 헤더 관련 정보 */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}

</style>