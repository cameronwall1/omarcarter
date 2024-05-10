<template>
    <div class="largesourcecontainer">
        <div class="largeontainer">
            <div class="largecontainerimage">
                <slot name="large-image">

                </slot>
                <!-- <img src="https://1000logos.net/wp-content/uploads/2020/02/American-Heart-Association-Logo-2010.png" alt=""> -->
            </div>
            <div class="largecontainertext">
                <!-- <h3>hello world Lorem.</h3> -->
                <!-- <h2>Lorem <br> ipsum dolor</h2> -->
                <h2>
                    <slot name = "title"></slot>
                </h2>
                <!-- <a href="">View</a> -->
                <slot name="large-link"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    box-sizing: border-box;
}

.largesourcecontainer {
    /* border: 3px solid black; */
    width: 100%;
    height: 15vw;
    background-color: #efefef;
    background-color: #f3f3f3;
}

.largeontainer {
    /* border: 3px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: row-reverse; */
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.largecontainerimage {
    /* border: 3px solid red; */
    /* background-image: url('https://images.unsplash.com/photo-1531012451721-432c0ae74527?q=80&w=2309&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
    background-position: center;
    background-size: cover;
    width: 60%;
    justify-self: flex-end;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.largecontainertext {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    /* border: 3px solid green; */
    /* max-width: 40%; */
    /* min-width: 40%; */
}

.largecontainertext h2, h3, a {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    /* width: 100%; */
    /* padding-left: 30%; */
}

.largecontainertext h2 {
    font-size: 1.5vw;
    /* line-height: 2vw; */
    /* margin-top: 3%; */
    font-weight: bold;
    /* border: 3px solid hotpink; */
}

.largecontainertext h3 {
    font-size: 1vw;
    color: transparent;
}

.largecontainertext a {
    /* margin-top: 7%; */
    text-decoration: underline;
    text-underline-offset: 3px;
    /* border: 3px solid red; */
    font-weight: 1vw;
    font-size: 1vw;
    margin-right: 100%;
}



</style>