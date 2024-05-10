<template>

    <div class="mission-container">
        <div class="mission">
            <!-- <div class="block one" style="background-color: rgb(244 63 94);"> -->
            <div class="block one">
                <h1 class="text-[1.5vw]">PASSION</h1>
                <h3 class="text-[1vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident animi tenetur recusandae. Voluptatibus sunt distinctio, totam dolorum quos, velit dolor cum aspernatur blanditiis adipisci nobis perferendis vitae repellendus cupiditate!</h3>
            </div>
            <!-- <div class="block two" style="background-color: rgb(238, 164, 178);"> -->
            <div class="block two">
                <h1 class="text-[1.5vw]">MISSION</h1>
                <h3 class="text-[1vw]">Our mission is to advocate, empower and serve our communities through CPR and AED education, CV screenings, teaching the principles of CV prevention and leading our athletes and their families to healthier lives.</h3>
            </div>
            <div class="block three">
                <h1 class="text-[1.5vw]">LEADERSHIP</h1>
                <h3 class="text-[1vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident animi tenetur recusandae. Voluptatibus sunt distinctio, totam dolorum quos, velit dolor cum aspernatur blanditiis adipisci nobis perferendis vitae repellendus cupiditate!</h3>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts"></script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.mission-container {
    /* margin-top: 7%; */
    /* border: 3px solid rebeccapurple; */
    width: 95%;
    height: 20vw;
    position: relative;
    /* margin-bottom: 10%; */
    font-family: "Poppins", sans-serif;
    /* border: 3px solid green; */
}

.mission {
    /* border: 3px solid red; */
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
}

.mission .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}

.mission .block:nth-child(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.mission .block *{
    color: black;
    text-align: center;
    margin-top: 10%;
}

.mission .block h1 {
    position: absolute;
    color: black;
    font-weight: bolder;
    top: -3%;
    width: 100%;
    /* border: 3px solid salmon; */
    text-align: center;
    /* font-size: 1.2vw; */
    letter-spacing: .5vw;
    /* font-size:calc(2px + 1.2vw); */
    /* top: 0; */
    /* color: black; */
    /* height: 100vw; */
}

.mission .block h3 {
    width: 80%;
    /* font-size: 1vw; */
    /* font-size:calc(2px + .9vw); */
    margin-top: 30px;
}

</style>