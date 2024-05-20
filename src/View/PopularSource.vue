<template>
  <div class="source w-full h-[10vw] flex rounded-[10px] items-center relative lg:w-[32%] lg:max-h-[125px]">
    <div class="link w-full h-full flex">
      <slot name="hyper-link"> </slot>
      <a
        href=""
        target="_blank"
        style="width: 100%; height: 100%"
        class="flex justify-center"
      >
        <div class="sourceimage hidden w-[7vw] h-[45%] bg-center bg-cover rounded-[50%] self-center relative mr-[5%] ml-[7%] object-cover object-center lg:flex xl:flex">
          <slot name="image" class="inherit-image"> </slot>
        </div>
        <div class="sourcetext w-full flex flex-col justify-center h-3/5 text-left self-center relative lg:w-[55%] xl:w-[95%]">
          <h2
            class="title text-[11px] font-bold lg:text-[1.2vw] text-center lg:text-left xl:text-left xl:text-[20px]"
          >
            <slot name="title-element"></slot>
          </h2>
          <p
            class="caption text-[10px] text-[rgb(159,_158,_158)] lg:text-[1vw] text-center lg:text-left xl:text-left xl:text-[16px]"
          >
            <slot name="caption-element"></slot>
          </p>
        </div>
      </a>
      <p class="hidden lg:flex icon absolute bottom-[2%] right-[0] justify-center items-center text-center text-[1vw]">
        <slot name="icon-element"></slot>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.source {
  /* min-width: 75px; */
  /* max-width: 400px; */
  /* min-height: 60px; */
  /* height: 9vw;
  display: flex;
  border-radius: 10px;
  align-items: center;
  position: relative;
  width: 100%; */
  width: 100%;
  font-family: "Poppins", sans-serif;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.style-link {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.source a {
  /* display: flex;
    justify-content: center; */
}

.link {
  /* width: 100%;
  height: 100%;
  display: flex; */
}

.sourceimage {
  /* width: 7vw;
  height: 45%;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  align-self: center;
  position: relative;
  margin-right: 5%;
  margin-left: 7%;
  object-fit: cover;
  object-position: center; */
}

.sourcetext {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  text-align: left;
  align-self: center;
  position: relative; */
}

.icon {
  /* position: absolute;
  bottom: -1vw;
  bottom: 2%;
  right: 0;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  /* font-size: 9rem; */
  /* font-weight: 700; */
  /* font-size:calc(3px + 1vw); */
  /* text-align: center; */
  /* border: 3px solid red; */
}

.caption,
.date {
  /* font-size: .7rem; */
  /* font-size: .85vw; */
  /* color: rgb(159, 158, 158); */
  /* font-size:calc(3px + .85vw); */
  /* text-align: center; */
  /* width: 17vw; */
  /* border: 3px solid orangered; */
}
</style>
