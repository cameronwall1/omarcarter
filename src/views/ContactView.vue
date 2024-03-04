<script setup lang="ts">

</script>

<template>
    <div class="contactcontainer">
        <!-- <h2>Contact Us</h2> -->
        <div class="contactText">
            <h2>SPEAKING ENGAGEMENT</h2>
            <h1>Contact Form</h1>
            <h3>We would love to connect with you! Please provide a bit more information regarding your inquiry below and we will be in touch ASAP.</h3>
        </div>
        <div>
        <form action="/action_page.php">
            <!-- <label for="fname">First Name</label> -->
            <input type="text" required id="fname" name="firstname" placeholder="Your first name..">

            <!-- <label for="lname">Last Name</label> -->
            <input type="text" required id="lname" name="lastname" placeholder="Your last name..">

            <!-- <label for="email">Email</label> -->
            <input type="email" required id="email" name="email" placeholder="Your email address..">

            <!-- <label for="location">Location - City,State</label> -->
            <input type="text" required id="location" name="location" placeholder="City/State..">

            <!-- <label for="organization">Organization</label> -->
            <input type="text" required id="organization" name="organization" placeholder="Your industry..">

            <!-- <label for="lname">Event Date</label> -->
            <input type="date" required id="date" name="date">

            <!-- <label for="additional">Additional Comments</label> -->
            <input type="textarea" id="comments" name="comments" placeholder="Additional comments...">
        
            <br>
            <input type="submit" value="Submit">
        </form>
        </div>
    </div>
</template>

<style>

input[type=text], select, input[type=email] , input[type=date], input[type=textarea] {
  width: 100%;
  padding: .8vw 2.5vw;
  margin: .5vw 0;
  /* display: inline-block; */
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  /* box-sizing: border-box; */
  color: black;
  font-size: 1.4vw;
}

input[type=submit] {
  width: 100%;
  /* background-color: #4CAF50; */
  background-image: url('https://images.unsplash.com/photo-1573869522166-0eed5b27f2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  color: white;
  padding: 1vw 2.5vw;
  /* margin: 8px 0; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: .9;
  /* transition: .75s ease-in-out; */
}

input[type=submit]:hover {
    opacity: 1;
  /* background-color: #45a049; */
}

label {
    color: black;
}

form {
    /* border: 3px solid black; */
    width: 70vw;
    margin: 0 auto;
    height: 60vw;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -5vw;
}

.contactcontainer {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 2vw;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 10vh;
}

/* .contactcontainer {
    min-height: 60vw;
    background-color: gainsboro;
} */

.contactText {
    width: 70%;
    text-align: center;
    /* margin-top: -15vw; */
    /* border: 3px solid red; */
}

.contactText h1 {
    color:black;
    font-size: 2.7vw;
    font-weight: bolder;
}

.contactText h2 {
    color: black;
    font-weight: bolder;
    font-size: 1.7vw;
    font-style: italic;
}

.contactText h3 {
    color: black;
    font-size: 1.3vw;
    width: 67%;
    text-align: center;
    margin: 0 auto;
}

</style>