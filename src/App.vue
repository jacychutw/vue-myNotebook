<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a58bdd;
  border: 1px solid #a58bdd;
  padding: 6px 48px;
  margin: 6px;
}

nav a.router-link-exact-active {
  color: #a58bdd;
}

a.router-link {
  text-decoration: none;
}

hr {
  border: 1px solid rgb(234, 220, 220);
}

h3 {
  color: #a6c5c0;
}

button:hover {
  cursor: pointer;
}

.common-btn {
  font-weight: bold;
  color: #a58bdd;
  border: 1px solid #a58bdd;
  padding: 6px 48px;
  margin: 6px;
  background: transparent;
}

.common-btn:disabled {
  font-weight: bold;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 6px 48px;
  margin: 6px;
  background: transparent;
}

.area-border {
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 600px;
  height: 200px;
  max-width: 80%;
  margin: auto;
  padding: 20px;
  font-size: 18px;
  resize: none;
  display: block;
}
</style>
