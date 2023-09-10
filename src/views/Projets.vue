  
<template>
 
  <div class="projets">
        <h5 class="text-gray-800 text-3xl font-serif font-extrabold py-8 pb-1 px-5 ">Liste des projets</h5>

    <div class="flex items-center justify-center ">
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-8 mt-3 px-5 md:px-12">
        <div v-for="(item, index) in datapr" :key="index" class="bg-gray-200 p-4 rounded ">

           <h5 class="mx-auto text-black text-3xl mt-4 font-serif font-extrabold  ">
            {{item.title}}
             <span v-if="item.titlee.length != 0"> <br>
            {{item.titlee}}
             </span>
             </h5>
	     <br/>
         <div class="flex justify-center"><img :src="item.img" />	</div>  	
  		<p class="text-black w-5/6 mx-auto mt-8 text-lg font-semibold leading-loose mb-9">
     {{item.textc}}
     <span v-if="item.textcc.length != 0"> <br>
     {{item.textcc}}
     </span>
     <span v-if="item.textcci.length != 0"> <br>
     {{item.textcci}}
     </span>
      </p>
       <p class="mb-4 mx-auto">  
         <a :href="item.lien" 
         class=" hover:bg-gray-600 hover:text-white rounded-full py-3 px-6 border-2 border-gray-600">
       {{item.titrelien}}</a>
       </p>

        </div>
       
       
     <!--   <div class="bg-gray-200 p-3 rounded">2</div>
         <div class="bg-gray-200 p-3 rounded">2</div>
        <div class="bg-gray-200 p-3 rounded">2</div> -->
      </div>
    
    </div>
    <Footer/>
  </div>
  
  
</template>

<script>
import Footer from '../components/footer.vue'

import unityp from "../assets/unity.png"
import ecore from "../assets/ecore.png"
import javap from "../assets/javapic.png"
import mazy from "../assets/mzy.jpeg"
import webavi from "../assets/webav.jpeg"
import bnk from "../assets/banklab.jpeg"

export default {
name: 'Projets',
  data(){
    return{
      datapr: [
              { title: 'Projets Unity', 
               titlee:'',
                img: unityp, 
                textc: "Les projets et prototypes de jeux sont développés avec le langage C# que le moteur de jeu Unity utilise.",
                textcc: "La nature de ces prototypes varie entre les jeux de type endless et les jeux de tir, avec une intégration basique d’un mode multijoueur.", 
                textcci: "",
                lien: 'https://github.com/HamzaNGADI/unity-projects.git',
                titrelien:'Accès aux projets' 
              },
              {
               title: 'Méta-modélisation', 
                titlee:'Java',
                img: ecore, 
                textc: "Ce projet consiste à découvrir la méta-modélisation en créant un générateur de code du langage SDL, à titre d’exemple, provenant d’une description XML.",
                textcc: "L’outil de méta-modélisation utilisé est Ecore qui permet de modéliser des méta-modèles après l’identification des entités d’un système, ainsi que les différents liens entre ces entités.", 
                  textcci: "",
                lien: 'https://github.com/HamzaNGADI/javaEcore.git',
                titrelien:'Accès au projet' 
              },
              {
               title: 'Projets',
                 titlee:'Java & JEE',
                img: javap, 
                textc: "Les divers projets Java/JEE développés ont pour but d’autoformation, de découvrir le développement Android, CORBA et RMI, et aussi d’acquérir plus de savoir sur les design patterns, les interactions homme-machine, les systèmes de gestion de bases de données, les servlets et JSP coté web ainsi que l’intégration des tests unitaires pour le bon fonctionnement du code rédigé.",
                textcc: "", 
                textcci: "",
                lien: 'https://github.com/HamzaNGADI/java-work.git',
                titrelien:'Accès aux projets' 
              },
               {
               title: 'Mazaya éducation', 
                titlee:'Site web dynamique',
                img: mazy, 
                textc: "Le site web Mazaya est dédié à la réservation des stages et formations, celui-ci se compose de plusieurs fonctionnalités telles que :",
                textcc: "Une inscription facile et intuitive, la navigation par onglets pour une meilleure prise en main, un espace dédié aux clients pour gérer leurs coordonnées ou réservations ainsi, imprimer les reçus des réservations en format PDF.", 
                  textcci: "Bibliothèques et outils externes : jQuery - Bootstrap – FPDF.",
                lien: 'https://github.com/HamzaNGADI/web-Mazaya-project.git',
                titrelien:'Accès au projet' 
              },



              {
               title: 'Mini-projets', 
               titlee:'Web avancé',
                img: webavi, 
                textc: "Les mini-projets permettent de se former par la pratique aux langages et technologies du web à savoir la mise en forme d'un document HTML incluant CSS, la programmation avec les langages JavaScript et PHP ainsi que l’utilisation d’AJAX, DOM et XML.",
                textcc: "", 
                textcci: "",
                lien: 'https://github.com/HamzaNGADI/mini-projects.git',
                titrelien:'Accès aux projets' 
              },
               {
               title: 'Bank Lab', 
               titlee:'Java & MySQL',
                img: bnk, 
                textc: "Bank Lab est un programme de gestion des clients et leurs transactions bancaires, destiné à la Banque Marocaine pour le Commerce et l’Industrie.",
                textcc: "Ce programme a été développé lors d’un stage d’initiation sous le langage Java, lié à l’application web phpMyAdmin destinée à la gestion de base de données MySQL.", 
                  textcci: "",
                lien: 'https://github.com/HamzaNGADI/banklab.git',
                titrelien:'Accès au projet' 
              }

              
              ]

    }
  },
  components: {
    Footer
  }
}
</script>

<style>
.pre-formatted {
  white-space: pre;
}
</style>