<template>
    <div class="updated-contact-container h-[150vw] md:h-[45vw] xl:max-h-[600px] scrollspy">
        <div class="updated-container flex-col md:flex md:flex-row">
            <div class="container-left flex-[1] w-[100%] md:w-[50%] md:flex-none md:border-r-[3px] md:border-[solid] md:border-[gainsboro]">
                <div class="mini-container h-[95%] md:h-[27vw] xl:max-h-[70%]">
                    <h2 class="text-[20px] md:text-[2.3vw] xl:text-[2.5rem]">Get in touch</h2>
                    <h4 class="text-[14px] md:text-[1.4vw] xl:text-[1.3rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur tempore provident aperiam temporibus repudiandae ratione odit quam error voluptate animi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis, minus eaque molestiae excepturi reiciendis!
                    </h4>
                    <h4 class="text-[14px] md:text-[1.4vw] xl:text-[1.3rem]">info@omarcarterfoundation.org
                        <br>(980) 825-9053</h4>
                </div>
            </div>
            <div class="container-right">
             <form action="" class="header-form justify-center md:pt-[15%] md:justify-between">
                <h6 class="hidden md:block text-[2.5vw] top-[5%] xl:top-[2%] md:px-[1.5vw] py-[.9vw] xl:text-[2.7rem]">Contact Me</h6>
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="text" required id="fname" name="firstname" placeholder="Your first name..">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="text" required id="lname" name="lastname" placeholder="Your last name..">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="email" required id="email" name="email" placeholder="Your email address..">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="text" required id="location" name="location" placeholder="City/State..">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="text" required id="organization" name="organization" placeholder="Your industry..">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="date" required id="date" name="date">
                <input class="text-[12px] md:text-[1vw] md:px-[1.5vw] py-[.9vw] xl:py-[.2vw] mx-[0] my-[0.7vw] md:my-[0.1vw] xl:text-[20px]" type="textarea" id="comments" name="comments" placeholder="Additional comments...">
                <br>
                <input class="mt-[-4%] text-[15px] md:text-[1.2vw] px-[1.5vw] py-[0.7vw] xl:p-[.3vw] xl:text-[20px] md:mt-[-4%]" type="submit" value="Submit">
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
    margin-top: 3%;
    margin-top: 7%;
    position: relative;
}

.updated-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    background-color: transparent;
}

.updated-container .container-left {
    height: 100%;
    display: flex;
    background-image: url('https://www.omarcarterfoundation.org/assets/banner-xl-30e19674.jpg');
    background-position: center;
    background-size: cover;
}

.updated-container .mini-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    color: white;
}

.updated-container .container-right {
    flex: 1;
    position: relative;
    height: 100%;
}

.container-left h2 {
    width: 70%;
    margin: 0 auto;
    font-weight: 700;
}

.container-left h4 {
    width: 70%;
    font-weight: 400;
    margin: 0 auto;
}

form {
  width: 50vw;
  height: 35vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  position: relative;
  /* margin: 150px auto;
  min-width: 350px;
  min-height: 200px;
  border: 3px solid blue; */
}

label {
  color: black;
}

select,
input[type="text"],
input[type="email"],
input[type="date"],
input[type="textarea"] {
  width: 100%;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  color: black;
  /* padding: 0.4vw 1.5vw; this is what it was, im changing to tailwind format
  font-size: 1vw; */
}

input[type="submit"] {
  width: 90%;
  background-image: url("https://images.unsplash.com/photo-1573869522166-0eed5b27f2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  /* padding: 0.7vw 1.5vw;
  padding: .3vw; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.9;
  color: white;
  /* font-size: 1vw;
  position: absolute;
  bottom: 7%;
  left: 4%; */
}

input[type="submit"]:hover {
  opacity: 1;
}

.contact-header {
  color: black;
  position: absolute;
  left: 5%;
  top: 10%;
  display: flex;
  width: 90%;
  justify-content: space-between;
  /* font-size: 2vw; */
}

.contact-header .btn {
  width: max-content;
  display: flex;
  justify-content: right;
  z-index: 2;
  text-align: right;
  /* font-size: 2.5vw; */
}

.contact-header .btn:hover {
  cursor: pointer;
}

.close-button {
  position: relative;
  color: transparent;
  margin-left: 90%;
  margin-top: 0;
  /* border: 3px solid red; */
}

/* expected to adjust the right container for the contact page */
.container-right form {
    transform: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    /* justify-content: flex-start;
    justify-content: space-around;
    justify-content: space-between;
    justify-content: center;
    padding-top: 15%; */
    }

.container-right form h6 {
    width: 90%;
    font-weight: 600;
    
}

.container-right form input[type=text],.container-right form input[type=email] ,.container-right form input[type=date],.container-right form input[type=textarea], .container-right form input[type=submit] {
  width: 85%;
    /* padding: .75vw 1.5vw;
    padding: .9vw 1.5vw; */
}

.container-right form input[type=submit] {
    width: 92%;
    width: 85%;
    position: relative;
}

.container-right h6 {
    text-align: center;
    position: absolute;
    width: 100%;
    /* top: 10%; */
}

</style>