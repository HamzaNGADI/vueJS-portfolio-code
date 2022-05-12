<template>
 <div class="footer">
  <div class="bg-gray-800 pb-6 mt-12">
			  	<h2 class="text-white text-3xl font-serif font-extrabold py-5 pb-5 px-5">Contact </h2>
					<h3  class="text-white md:inline font-bold">Téléphone : </h3>
					<p class="text-white md:inline " ><a class="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none" >+33 7 88 91 53 60</a></p>
		<div>
					<h3 class="text-white md:inline font-bold">E-mail : </h3>
					<p class="text-white md:inline "><a class="cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">ngadihamza@gmail.com</a></p>
    </div>	

    <div class="pt-4 ">

      <a href="https://github.com/HamzaNGADI?tab=repositories" class="pr-5 text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">
        <fa :icon="['fab', 'github']"/>
      </a>
      <a href="https://www.linkedin.com/in/hamzangadi" class="text-3xl md:text-4xl text-white cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none">
      <fa :icon="['fab', 'linkedin']"/>
      </a>

    </div>

  </div>
 
  </div>
</template>

<script>
export default {
 name: 'footer',
  props: {
  }
}
</script>

<style>

</style>