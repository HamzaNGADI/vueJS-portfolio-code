<template>

  <div class="presentation">
  <div class="flex flex-col items-center ">
   <div class="flex flex-col items-center bg-gray-800 pb-2 ">
    <h5 class="text-white text-3xl font-serif font-extrabold py-8 pb-3 px-5 ">Présentation : Hamza NGADI</h5>
  		<p class="text-white py-1 px-2 w-5/6 md:w-4/5 text-lg font-semibold leading-loose pb-3">Doctorant en informatique à l'<a class="underline hover:text-blue-400" href="https://www.univ-brest.fr/ufr-sciences">Université de Bretagne Occidentale de Brest</a>, traitant le sujet de la modélisation d’une plateforme de jumeau numérique pour les villes intelligentes.<br/>
		Ce sujet a pour but de modéliser une plateforme de jumeau numérique pour les villes intelligentes, simulant leurs environnements urbains afin de prédire d’éventuels comportements suspects ou d’étudier divers scénarios suite à des modifications sur les données des environnements.<br/>
						Cherchant activement de nouvelles opportunités en ingénierie et développement informatique, je vous présente une sélection de mes projets et prototypes développés.
      </p>
    </div>
      <h2 class="text-3xl font-serif font-extrabold py-7 pb-5 px-5 ">Présentation des projets</h2>
			<p class="py-1 px-2 w-5/6 md:w-4/5 text-lg font-semibold leading-loose">
        Les projets développés varient entre des programmes desktop, des sites web dynamiques, ainsi que des prototypes de jeux et simulations dans un environnement virtuel.<br />
									Ces projets, présents dans l'onglet "Projets", sont développés avec divers langages de programmation, frameworks, APIs et bibliothèques qui les distinguent, ciblant plus d’autonomie en apprentissage des nouvelles technologies.  </p>
				<br/><div class="mx-4"><img :src="img" /></div> 		
    </div>

    
      <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src

import image from "../assets/themain.jpeg"
import Footer from '../components/footer.vue'


export default {
  name: 'Presentation',
  data(){
    return{
      img:image

    }
  },
  components: {
    Footer
  }
}
</script>
