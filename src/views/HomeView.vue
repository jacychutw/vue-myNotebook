<template>
  <div>
    <h2 v-if="showHeader">英文學習筆記</h2>
    <br>
    <div style="border: 1px solid lightgray; width: 100px; height: 100px; margin: auto; padding: 10px;">
      <img v-if="showHeader" alt="Notebook logo" src="../../public/notebook.png">
    </div>
    <br>
    <nav v-if="showHeader">
      <router-link to="notebook">新增筆記</router-link>
      <router-link to="review">來去複習</router-link>
      <router-link to="alldata">所有筆記</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
    }
  },
  watch: {
    $route(to) {
      // 將 to.name 存入變數
      const routeName = to.name;

      // 根據路由名稱決定是否顯示 Header
      if (routeName === 'home') {
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    }
  }
}
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a58bdd;
  border: 1px solid #a58bdd;
  padding: 6px 10px;
  margin: 6px;
}

nav a.router-link-exact-active {
  color: #a58bdd;
}

a {
  text-decoration: none;
}
</style>