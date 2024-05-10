
<template>
  <div class="maincontainer">
    <HeaderComponent />
    <!-- <LandingComponentVue /> -->
    <!-- <AboutComponent /> -->
    <!-- <BoardComponent /> -->
  </div>
</template>
<script setup lang = "ts">
import HeaderComponent from './View/HeaderComponent.vue';
import LandingComponentVue from './View/LandingComponent.vue';
// import AboutComponent from './View/AboutComponent.vue';
import BoardComponent from './View/BoardComponent.vue';

onMounted (() => {
  // var closebtn = document.querySelector('.btn');

  // closebtn?.addEventListener('click', e => {
  //   console.log('btn clicked');
  // });



  // function togglePopup () {
  //     console.log('button clicked')
  //     document.getElementById('popup-1')?.classList.toggle('active');
  // }
})

</script>
<style>

  .maincontainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1500px;
    background-color: #f6f6f6;
    /* border: 3px solid black; */
    margin: 0 auto;
  }

</style>