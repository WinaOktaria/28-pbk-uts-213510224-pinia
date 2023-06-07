<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'Todo' }" class="nav-link">Store</router-link>
      <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
      <router-link :to="{ name: 'contact' }" class="nav-link">Contact Us</router-link>
    </div>
    
    <router-view></router-view>	
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-link:hover {
  text-decoration: underline;
  background-color: (#EA906C);
  transform: scale(1.1);
}
</style>
