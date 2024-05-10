<template>
    <div class="source">
        <div class="link">
            <slot name="hyper-link">
                
            </slot>
            <a href="" target="_blank" style="width: 100%; height: 100%;">
                <div class="sourceimage hidden lg:flex xl:flex">
                    <slot name="image" class="inherit-image">
    
                    </slot>
                </div>
                <div class="sourcetext">
                    <!-- <h2 class="title">Lorem, ipsum. Lorem</h2> -->
                    <h2 class="title text-[1vw] text-center lg:text-left xl:text-left">
                        <slot name="title-element"></slot>
                    </h2>
                    <!-- <p class="caption">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet.</p> -->
                    <p class="caption text-[.85vw] text-center lg:text-left xl:text-left">
                        <slot name = "caption-element"></slot>
                    </p>
                    <p class="icon text-[1vw]">
                        <slot name = "icon-element"></slot>
                    </p>
                </div>
            </a>

        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.source {
    /* border: .7px solid black; */
    width: 32%;
    min-width: 75px;
    max-width: 400px;
    min-height: 60px;
    height: 9vw;
    display: flex;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    align-items: center;
    position: relative;
}

.source a {
    display: flex;
    justify-content: center;
}

.link {
    width: 100%;
    height: 100%;
    display: flex;
}

.style-link {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.sourceimage {
    /* border: 3px solid seagreen; */
    width: 7vw;
    height: 45%;
    /* background-image: url('https://www.abcinstantaccess.com/images/abc.png'); */
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    align-self: center;
    position: relative;
    margin-right: 5%;
    margin-left: 7%;
    /* display: flex; */
    object-fit: cover;
    object-position: center;
}

.sourcetext {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 3px solid blue; */
    height: 60%;
    width: 55%;
    text-align: left;
    align-self: center;
    position: relative;
}

.sourcetext .icon {
    /* border: 3px solid red; */
    position: absolute;
    bottom: -10px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* font-size: 1vw; */
}

.title {
    /* font-size: .9rem; */
    /* font-size: 1vw; */
    font-weight: 700;
    font-size:calc(3px + 1vw);
    /* text-align: center; */
    /* border: 3px solid red; */
}

.caption, .date {
    /* font-size: .7rem; */
    /* font-size: .85vw; */
    color: rgb(159, 158, 158);
    /* font-size:calc(3px + .85vw); */
    /* text-align: center; */
    /* width: 17vw; */
    /* border: 3px solid orangered; */
}


</style>