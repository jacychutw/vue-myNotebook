<template>
  <div>
    <router-link to="/">
      <div class="top-content">英文學習筆記</div>
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'TopArea',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.top-content {
  color: #c7a5a5;
  font-size: 20px;
  padding: 20px;
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
