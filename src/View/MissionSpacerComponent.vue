<template>

    <div class="mission-container h-max md:h-[20vw] xl:h-[300px] scrollspy" >
        <div class="mission flex w-full h-full relative md:grid md:grid-cols-[repeat(3,_1fr)]">
            <div class="block-container one flex flex-col items-center justify-center w-full relative">
                <h1 class="text-[16px] -top-[3%] text-[black] text-center mt-[5%] absolute md:top-[3%] w-full tracking-[.5vw] font-['Poppins',_sans-serif] font-bold md:text-[1.7vw] xl:text-[24px]">PASSION</h1>
                <h3 class="text-[13px] text-[black] text-center  w-[85%] mx-[auto] my-[0] mt-[40px] md:text-[1.2vw] xl:mt-[1px] xl:text-[18px]">It only takes one person to mobilize a community and inspire change. Even if you don't feel like you have it in you, it's in you. You have to believe in yourself. People will see your vision and passion and follow you.</h3>
            </div>
            <div class="block-container two flex border-l-[1px] border-[solid] border-[black] md:border-r-[1px] md:border-[solid] md:border-[black] flex-col items-center justify-center w-full relative">
                <h1 class="text-[16px] -top-[3%] text-[black] text-center mt-[5%] absolute font-['Poppins',_sans-serif] font-bold md:top-[3%] w-full tracking-[.5vw] md:text-[1.8vw] xl:text-[24px]">MISSION</h1>
                <h3 class="text-[13px] text-[black] text-center  w-[85%] mx-[auto] my-[0] mt-[40px] md:text-[1.2vw] xl:mt-[1px] xl:text-[18px]">Our mission is to advocate, empower and serve our communities through CPR and AED education, CV screenings, teaching the principles of CV prevention and leading our athletes and their families to healthier lives.</h3>
            </div>
            <div class="block-container flex-col items-center justify-center w-full relative three hidden md:flex ">
                <h1 class="text-[12px] text-[black] text-center mt-[5%] absolute font-['Poppins',_sans-serif] font-bold md:top-[3%] w-full tracking-[.5vw] md:text-[1.7vw] xl:text-[24px]">LEADERSHIP</h1>
                <h3 class="text-[10px] text-[black] text-center  w-[85%] mx-[auto] my-[0] mt-[40px] md:text-[1.2vw] xl:mt-[20px] xl:text-[18px]">The single biggest way to impact an organization is to focus on leadership development. There is almost no limit to the potential of an organization that recruits good people, raises them up as leaders and continually develops them.</h3>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts"></script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.mission-container {
    width: 95%;
    position: relative;
    font-family: "Poppins", sans-serif;
    /* margin-top: 7%;
    border: 3px solid rebeccapurple;
    height: 20vw;
    height: max-content;
    margin-bottom: 10%;
    border: 3px solid green; */
}

.mission {
    /* width: 100%;
    height: 100%;
    position: relative; */
    /* border: 3px solid red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    display: flex; */
}

.mission .block-container {
    /* flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative; */
    /* border: 3px solid red;
    display: flex; */
}

.mission .block-container *{
    /* color: black;
    text-align: center;
    margin-top: 5%; */
}

.mission .block-container h1 {
    /* font-family: "Poppins", sans-serif;
    font-weight: 700; */
    /* position: absolute;
    font-weight: bolder;
    top: -3%;
    width: 100%;
    letter-spacing: .5vw; */
    /* border: 3px solid salmon;
    font-size: 1.2vw;
    font-size:calc(2px + 1.2vw);
    top: 0;
    color: black;
    height: 100vw; */
}

.mission .block-container h3 {
    /* width: 80%;
    margin: 0 auto;
    margin-top: 40px; */
    /* font-size: 1vw;
    font-size:calc(2px + .9vw);
    margin-top: 15px; */
}

</style>