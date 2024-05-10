<template>
    <div class="largeAboutContainer">
        <div class="large-about-container">
            <!-- <h1 class="text-[9vw] xl:text-[120px]">OMAR CARTER</h1> -->
            <img src="https://images.unsplash.com/photo-1714498975277-ad0de33eceb4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-one h-[55vw] w-[70%] xl:max-h-[1100px]">
            <!-- <img src="../assets/images/IMG_0012.jpeg" alt="" class="img-one h-[55vw] w-[70%] xl:max-h-[1100px]"> -->
            <!-- <img src="https://images.unsplash.com/photo-1714419991258-7172e140af4d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-two h-[27vw] w-[24%] xl:max-h-[400px]"> -->
            <img src="../assets/images/IMG_0845.jpeg" alt="" class="img-two h-[27vw] w-[30%] xl:max-h-[400px]">
            <div class="img-three">
                <!-- <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi officia quaerat tempore ipsam maxime deleniti maiores ab iure possimus dolorum aspernatur nesciunt facere, ut debitis! Hic nam possimus placeat?</h3> -->
                <h3 class="text-[1.3vw]">Mr. Carter is available for speaking engagements, panels & workshops about SCA. He is the founder of Omar Carter Foundation and a survivor of Sudden Cardiac Arrest.</h3>
                <h4 class="text-[1.1vw]">For more information, please contact us by:</h4>
                <!-- <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quos recusandae asperiores dolore deserunt obcaecati placeat pariatur alias, similique perspiciatis corporis commodi tempora doloribus rem.</h4> -->
                <h4 class="mt-[-10%] text-[1.1vw]">info@omarcarterfoundation.org
                    <br>(980) 825-9053</h4>
                <button class="text-[1vw]">Contact Me</button>
            </div>
            <div class="about-me-container-text">
                <h3 class="text-[1.4vw]">"Hope can be a powerful force. Maybe there’s no actual magic in it, but when you know what you hope for most and hold it like a light within you, you can make things happen, almost like magic.” </h3>
                <div class="about-section-break">
                    <h4 class="text-[1.2vw]">Using Omar’s miracle to his advantage, he founded the OC Foundation to raise awareness for sudden cardiac arrest. He turned his passion for helping others to actions and is making it his mission to prevent families from suffering this type of tragedy due to a lack of awareness, screening or access to immediate medical attention. </h4>
                    <h4 class="text-[1.2vw]">The Charity focuses on the training of athletes and families in cardiopulmonary resuscitation (CPR), the use of automated external defibrillators (AED), and cardiovascular education. In just 12 short months, Omar has established a voice in the community by partnering with billion dollar companies like Carolinas Healthcare System.</h4>
                </div>
            </div>
            <div class="about-summary">
                <div class="about-summary-block">
                    <h5 class="text-[1.3vw]">Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                    <h1 class="text-[2.5vw]">Lorem, ipsum dolor.</h1>
                    <h4 class="text-[1.1vw]">This story isn’t one that you hear all the time. When you hear of someone who has a “big heart” – you think of generosity, selflessness, and kindness, and while that applies to Omar Carter, his diagnosis of a “big heart” meant something completely different. Doctors diagnosed Omar with an enlarged heart, meaning his heart was too big for his body.</h4>
                    <h4 class="text-[1.1vw]">He was later cleared to continue playing basketball and his career excelled. Omar played throughout high school, was an all-conference player at Appalachian State University, and then continued his career playing overseas in several countries including Brazil and the Dominican Republic. Then in the blink of an eye, Omar’s professional basketball career was over. His heart stopped while playing basketball at the Grady Cole Center in Charlotte on July 9th, 2013.</h4>
                    <h4 class="text-[1.1vw]">He lay on the floor unconscious receiving CPR for 13 minutes until an emergency transport arrived. He later wound up in the hospital on life support and in a medically-induced coma. His life changed forever. Statistics show that 90% of people who suffer from sudden cardiac arrest do not survive. Omar was in a very small number of people who are blessed enough to receive immediate attention. Overcoming the odds for Omar meant surviving SCA when only 10% of victims do!</h4>
                </div>
            </div>
            <div class="about-summary-image"></div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>

.largeAboutContainer {
    background-color: #f6f6f6;
    height: 150vw;
    width: 100%;
    position: relative;
    margin: 10vh 0 0;
    height: max-content;
}

.largeAboutContainer .large-about-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.large-about-container h1 {
    text-align: center;
    font-weight: 700;
    letter-spacing: 10px;
    width: 100%;
    top: 0;
    
}

.large-about-container .img-one {
    /* border: 3px solid red; */
    /* height: 55vw;
    width: 65%; */
    margin: -10px auto 0;
    margin: 3vw auto 0;
    z-index: -1;
}

.large-about-container .img-two {
    /* border: 3px solid rebeccapurple; */
    /* height: 27vw;
    width: 24%; */
    position: absolute;
    /* top: 36%; */
    /* top: 24%; */
    top: 17%;
    left: 3%;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.large-about-container .img-three {
    /* border: 3px solid blue; */
    background-color: #f6f6f6;
    height: 30vw;
    width: 33%;
    position: absolute;
    /* border: 3px solid salmon; */
    /* top: 23%; */
    /* top: 17%; */
    top: 10%;
    right: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: left;
    padding: 0 3vw;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.img-three h3 {
    font-weight: 700;
    /* font-size: 1.3vw; */
}

.img-three h4 {
    /* font-size: 1.1vw; */
    text-align: left;
    align-self: flex-start;
}

.img-three button {
    border: 3px solid black;
    width: 50%;
    height: 10%;
    align-self: flex-start;
    transition: background-color .3s ease-in-out;
    /* font-size: 1vw; */
}

.img-three button:hover {
    background-color: black;
    color: white;
}

.about-me-container-text h3 {
    /* border: 3px solid red; */
    /* font-size: 1.3vw; */
    width: 70%;
    margin: 3% auto 2%;
    text-align: center;
    font-weight: 700;
}

.about-me-container-text .about-section-break {
    display: flex;
    /* border: 3px solid red; */
    width: 70%;
    margin: 4% auto -7%;
    /* font-size: 1.2vw; */
    height: 17vw;
    justify-content: space-around;
    align-items: center;
}

.about-me-container-text .about-section-break h4 {
    /* border: 3px solid slateblue; */
    padding: 1vw 2vw;
    width: 50%;
    font-weight: 700;
    /* font-size: 1.2vw; */
    height: 100%;
}

.about-me-container-text .about-section-break h4:nth-child(2) {
    text-align: right;
    font-weight:normal;
    
}

.about-summary {
    border: 3px solid black;
    height: 60vw;
    width: 60%;
    margin-top: 10%;
    background-color: black;
    /* margin-bottom: 10vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    /* font-size: 1vw; */
    /* align-items: center; */
}

.about-summary-block {
    /* border: 3px solid red; */
    width: 80%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    height: max-content;
}

.about-summary h1 {
    /* font-size: 2.5vw; */
    letter-spacing: 2px;
    margin: 3% 0;
    font-weight: 900;
}

.about-summary h4 {
    width: 97%;
    width: 92%;
    margin: 0 auto;
    /* font-size: 1.1vw; */
    font-weight: 500;
    /* border: 3px solid brown; */
}


.about-summary h4:not(:nth-child(3)) {
    margin-top: 3%;
}

.about-summary-image {
    /* border: 3px solid red; */
    height: 40vw;
    width: 40%;
    position: absolute;
    right: 3%;
    bottom: 6%;
    /* background-image: url('https://images.unsplash.com/photo-1714399611409-20ca201954d7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
    background-image: url('../assets/images/IMG_4203.jpeg');
    background-position: center;
    background-size: cover;
}

</style>