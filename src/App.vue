<template>

<header class="sticky top-0 md:px-3 md:py-2 bg-gray-900  bg-opacity-95 md:flex md:justify-between ">
  <div class="flex items-center justify-between px-3 py-2 md:p-0">
    <div class="text-white ">H.NGADI Portfolio</div>
    <div class="md:hidden">
    <button @click="toogle" type="button" class="block text-white  hover:text-gray-400 focus:text-gray-400 focus:outline-none ">
      <svg class="h-7 w-7 fill-current" viewBox="0 0 24 24">
       <path v-if="opening" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
       <path v-if="!opening" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
    
      </svg>
    </button>
    </div>
  </div>

  <div :class="opening ? 'block' : 'hidden' " class="px-1 pt-1 pb-4 md:flex md:p-0">
    <router-link class="block px-1 py-1 text-white font-semibold rounded hover:bg-gray-800" to="/">Présentation</router-link> 
    <router-link class="mb-0 pb-0 mt-1 block px-1 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2" to="/projets">Projets</router-link>
  </div>
  

</header>

<transition 
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    > 
   <router-view/>
</transition>
<!-- 
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  -->

</template>

<script>
// @ is an alias to /src
import "./assets/tailwind.css"

export default {
  name: 'App',
  data(){
    return{
      opening:false

    }
  },
  methods:{
        toogle()
        {
          this.opening = ! this.opening;
        } 
      
    }

  
}
</script>

<style>

.fade-enter-from, .fade-leave-to
{
 opacity: 0;
}
.fade-enter-active, .fade-leave-active
{
  transition: opacity 2s ease;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
