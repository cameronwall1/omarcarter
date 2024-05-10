<template>
    <div class="updated-contact-container">
        <div class="updated-container">
            <div class="container-left">
                <div class="mini-container">
                    <h2>Get in touch</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur tempore provident aperiam temporibus repudiandae ratione odit quam error voluptate animi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis, minus eaque molestiae excepturi reiciendis!
                    </h4>
                    <h4>info@omarcarterfoundation.org
                        <br>(980) 825-9053</h4>
                </div>
            </div>
            <div class="container-right">
             <form action="" class="header-form">
                <h6>Contact Me</h6>
                <input type="text" required id="fname" name="firstname" placeholder="Your first name..">
                <input type="text" required id="lname" name="lastname" placeholder="Your last name..">
                <input type="email" required id="email" name="email" placeholder="Your email address..">
                <input type="text" required id="location" name="location" placeholder="City/State..">
                <input type="text" required id="organization" name="organization" placeholder="Your industry..">
                <input type="date" required id="date" name="date">
                <input type="textarea" id="comments" name="comments" placeholder="Additional comments...">
                <br>
                <input type="submit" value="Submit">
            </form>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>

.updated-contact-container {
    border-top: 2px solid rgb(213, 213, 213);
    border-bottom: 2px solid rgb(213, 213, 213);
    width: 100%;
    height: 45vw;
    margin-top: 3%;
    position: relative;
}

.updated-container {
    /* border: 3px solid green; */
    width: 100%;
    height: 100%;
    display: flex;
    /* background-color: rgb(104, 133, 220); */
    position: relative;
    background-color: transparent;
}

.updated-container .container-left {
    /* border: 10px solid purple; */
    width: 50%;
    height: 100%;
    display: flex;
    background-image: url('https://www.omarcarterfoundation.org/assets/banner-xl-30e19674.jpg');
    background-position: center;
    background-size: cover;
    border-right: 3px solid rgb(213, 213, 213);;
}

.updated-container .mini-container {
    /* border: 3px solid yellow; */
    flex: 1;
    height: 27vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    color: white;
}

.updated-container .container-right {
    /* border: 3px solid royalblue; */
    flex: 1;
    position: relative;
    /* background-color: rgb(94, 124, 215); */
}

.container-left h2 {
    font-size: 3vw;
    /* border: 3px solid black; */
    width: 70%;
    margin: 0 auto;
    font-weight: 700;
}

.container-left h4 {
    font-size: 1.4vw;
    /* border: 3px solid black; */
    width: 70%;
    font-weight: 400;
    margin: 0 auto;
}

.container-right form {
    position: absolute;
    top: 0;
    left: 0;
    transform: none;
    /* border: 3px solid red; */
    height: 100%;
    width: 100%;
    background-color: transparent;
}

.container-right form h6 {
    width: 90%;
    font-weight: 600;
}

.container-right form input[type=text],.container-right form input[type=email] ,.container-right form input[type=date],.container-right form input[type=textarea], .container-right form input[type=submit] {
    padding: .75vw 1.5vw;
}

.container-right form input[type=submit] {
    width: 92%;
    margin-bottom: 5%;
    font-size: 1.3vw;
}

.container-right h6 {
    /* border: 3px solid red; */
    text-align: center;
    font-size: 2.5vw;
    position: absolute;
    top: 10%;
    width: 100%;
}

</style>