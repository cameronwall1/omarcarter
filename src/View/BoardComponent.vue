<template>
    <div class="boardcontainer">
        <div class="board">
            <div class="boardposition one"></div>
            <div class="boardposition two">
                <div class="board-display">
                    <h1>Lorem ipsum dolor.</h1>
                    <!-- <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellat nam </h2> -->
                    <!-- <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellat nam </h2> -->
                    <!-- <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellat nam </h2> -->
                </div>
            </div>
            <div class="boardposition three"></div>
            <div class="boardposition four"></div>
            <div class="boardposition five"></div>
            <div class="boardposition six">
                <div class="board-display">
                    <h1>Lorem, ipsum dolor.</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



    .boardcontainer {
        /* border: 3px solid red; */
        /* height: 90vh; */
        height: 100%;
        width: 100%;
        /* margin-bottom: 50vw; */
        /* margin-top: 1%; */
        /* padding: 7%; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* overflow-x: hidden; */
    }

    .board {
        width: 100%;
        height: 100%;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(6,1fr);
        font-family: "Poppins", sans-serif;
        gap: 1rem;
        padding: 1rem;
        /* gap: 10px; */
        /* border: 3px solid red; */
        /* margin-left: -10%; */
        /* padding */
    }

    .boardposition {
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        /* border: 3px solid red; */
    }

    .boardposition.one {
        /* border: 3px solid slateblue; */
        grid-row: 1/-1;
        grid-column: 1/3;
        background-color: rgb(255, 239, 241);
        background-color: rgb(175, 163, 165);
        background-image: url('../assets/images/IMG_4203.jpeg');
    }

    .boardposition.two {
        grid-row: 1/5;
        background-color: rgb(188, 96, 112);
        background-color: rgb(244 63 94);
        display: flex;
        /* flex-direction: column; */
        align-items:center;
        justify-content: center;
        /* border: 3px solid black; */
    }

    .boardposition.two .board-display {
        /* border: 3px solid white; */
        height: 60%;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-evenly;
        padding: 15px;
    }

    .boardposition.two .board-display h1, 
    .boardposition.six .board-display h1 {
        font-size: 1.3rem;
        font-weight: bold;
        text-align: left;
        /* border: 3px solid black; */
    }

    .boardposition.two .board-display h1 {
        padding-left: 10%;
    }

    .boardposition.six .board-display h1 {
        font-size: 1rem;
    }

    .boardposition.two .board-display h2 {
        /* font-size: .5rem; */
        font-size: .7rem;
        font-weight: bold;
        text-align: left;
        padding-left: 10%;
        /* text-align: center; */
    }

    .boardposition.six .board-display h2 {
        font-size: .6rem;
        font-weight: bold;
        text-align: left;
    }

    .boardposition.three {
        grid-row: 5/-1;
        background-color: rgb(201, 179, 182);
        background-image: url('../assets/images/IMG_6889.jpeg');
        background-image: url('https://images.unsplash.com/photo-1712315481738-a77f7f78f2cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-position-y: top;
    }

    .boardposition.four {
        grid-row: 1/4;
        background-color: rgb(246, 231, 233);
        background-image: url('../assets/images/IMG_0012.jpeg');
        grid-column: 4/-1;
    }

    .boardposition.five {
        grid-row: 4/6;
        grid-column: 4/-1;
        background-color: rgb(245, 97, 122);
        background-image: url('https://www.heart.org/-/media/Images/News/SFTH/0201SFTHOmarCarter_SC.jpg?sc_lang=en&hash=DAD840BCF1B701A3370CFEC833949C95');
        background-position-y: -.01%;
    }
    
    .boardposition.six {
        grid-row: 6/-1;
        grid-column: 4/-1;
        background-color: rgb(85, 75, 76);
        padding-left: 2%;
        display: flex;
        align-items: center;
        color: white;
        justify-content: center;
    }

</style>