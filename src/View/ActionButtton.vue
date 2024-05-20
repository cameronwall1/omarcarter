<template>
  <button class="action-button-design text-[1.1vw] w-[7vw] h-[2.5vw] xl:text-[17px] xl:w-[125px] xl:h-[40px] text-[white] [transition:background-color_400ms_ease-in-out]">
    <slot name="button-link"></slot>
  </button>
</template>
<script setup lang="ts"></script>
<style>
.action-button-design {
  /* width: 7vw;
  height: 2.5vw;
  color: white;
  transition: background-color 400ms ease-in-out; */
  background-color: rgb(244 63 94);
}

.action-button-design:hover {
  background-color: white;
  color: rgb(244 63 94);
  border: 1px solid rgb(244 63 94);
}
</style>
