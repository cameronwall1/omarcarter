<script setup lang= "ts">

const visible = ref(false)
const entry = ref(false)
const opacity = ref(0)

onMounted(() => {
  setTimeout(() => {
    entry.value = true
  }, 1000)

  setTimeout(() => {
    visible.value = true
  }, 3000)

  const interval = setInterval(() => {
    opacity.value -= 0.1
    if (opacity.value < 0) clearInterval(interval)
  }, 2000)

    let maincontainer = document.querySelector('.maincontainer');
    let secondSection = document.querySelector('.secondSection');
    let diagonal = document.querySelector('.diagonal.two')
    let captions = document.querySelectorAll('.imgcaption')
    var offsetTop = 400;

    window.addEventListener('scroll',(e) => {
        console.log(window.scrollY);
        console.log('screen X: ',window.screenX)
        if (window.screenX > 600) {
            secondSection?.classList.add('active')
            maincontainer?.classList.add('active');
            diagonal?.classList.add('active')
            for (let i = 0; i < captions.length; i++) {
                captions[i].classList.add('active')
            }
        } else if (window.screenX < 600 && window.screenX > 200) {
            if (window.scrollY < 500) {
            maincontainer?.classList.remove('active');
            secondSection?.classList.remove('active');
            diagonal?.classList.remove('active')
            for (let i = 0; i < captions.length; i++) {
                captions[i].classList.remove('active')
            }
            } else {
                secondSection?.classList.add('active')
                maincontainer?.classList.add('active');
                diagonal?.classList.add('active')
                for (let i = 0; i < captions.length; i++) {
                    captions[i].classList.add('active')
                }
            }
        } else {
            if (window.scrollY < 1000) {
            maincontainer?.classList.remove('active');
            secondSection?.classList.remove('active');
            diagonal?.classList.remove('active')
            for (let i = 0; i < captions.length; i++) {
                captions[i].classList.remove('active')
            }
        } else {
            secondSection?.classList.add('active')
            maincontainer?.classList.add('active');
            diagonal?.classList.add('active')
            for (let i = 0; i < captions.length; i++) {
                captions[i].classList.add('active')
            }
        }
        }
    },true)
})

</script>

<style>
    
</style>


<template>

<div class="maincontainer">
    <div class="firstSection h-[100vw] flex justify-around items-center flex-col">
        <div class="firstcontainer w-[90vw] flex h-[40vw] mb-[10vw] mt-[5vw]">
            <!-- <img src="../assets/IMG_0278.jpeg" alt=""> -->
            <!-- <img src="https://images.unsplash.com/photo-1708913155384-4d695e67fce7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""> -->
            <img class="object-cover object-center w-[60%] h-full" src="https://images.unsplash.com/photo-1595339846178-05ed4b489aa6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <!-- <img src="https://youthincmag.com/wp-content/uploads/2017/11/Public-Speaking.jpg" alt=""> -->
            <div class="containerdetails flex-[1] flex justify-center flex-col bg-[black]">
                <h3 class="text-[white] text-[1.75vw] text-center w-4/5 mt-[0] mx-[auto] mb-[1vw] italic">Public Speaker</h3>
                <h2 class="text-[white] text-[4vw] text-center w-[90%] mx-[auto] my-[0] font-[bolder] italic">Lorem ipsum dolor, sit amet.</h2>
            </div>
        </div>
        
            <h1 class="text-left text-[1.5vw] w-[90%] pl-[1%] text-[black]">Featured Speaking Videos</h1>

            <div class="featuredspeak h-[40vw] w-[90%] mx-[auto] my-[0] flex p-[10px] mb-[5vw] gap-[20px]">
                <a class="w-full" href="https://youtu.be/7zMIpyRwlgA?si=djsaW61BpYr0_kTs" target="_blank">
                    <div class="featuredevent one h-full flex-[1] flex flex-col relative">
                        <img class="h-[50%]" src="https://images.unsplash.com/photo-1467745484408-7b06bd4c1b88?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-full mx-[auto] my-[0] italic xl:inline lg:inline">Speaking Event in Massacusets</h2>
                    </div>
                </a>
                <a class="w-full" href="https://youtu.be/suUMl9jeMiU?si=at0XsiWSBERrnXSw" target="_blank">
                    <div class="featuredevent two h-full flex-[1] flex flex-col relative">
                        <img class="h-[80%]" src="https://images.unsplash.com/photo-1708458697005-bd5728ab73a0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-full mx-[auto] my-[0] italic xl:inline lg:inline">Speaking Event in Massacusets</h2>
                    </div>
                </a>
                <a class="w-full" href="https://youtu.be/XJsaziVA9Mg?si=etAkvdmohPWIUnMV" target="_blank">
                    <div class="featuredevent three h-full flex-[1] flex flex-col relative">
                        <img class="h-[60%]" src="https://images.unsplash.com/photo-1708785553512-9b21c42d13cf?q=80&w=2318&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-full mx-[auto] my-[0] italic xl:inline lg:inline">Speaking Event in Massacusets</h2>
                    </div>
                </a>
                <a class="w-full" href="https://youtu.be/RAh02Bn1T8o?si=I6V7lH-Ceka6bAB7" target="_blank">
                    <div class="featuredevent four h-full flex-[1] flex flex-col relative">
                        <img class="h-[70%]" src="https://images.unsplash.com/photo-1707742528767-31a026202989?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-full mx-[auto] my-[0] italic xl:inline lg:inline">Speaking Event in Massacusets</h2>
                    </div>
                </a>
        </div>
    </div>
    

    <div class="secondSection h-[53vw] overflow-y-hidden">
        <!-- <div class="diagonal">
            <h2>Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.</h2>
        </div> -->
        <div class="diagonal two">
            <h2>Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love.</h2>
        </div>
    </div>

<!-- <div class="thirdSection">
</div> -->

<div class="firstSection two h-[100vw] flex justify-around items-center flex-col bg-[white] relative mt-[7%]">
    <h1 class="text-[1.5vw] w-[90%] pl-[1%] text-[black] text-right pr-[1vw] absolute top-[3vw]">Featured Articles</h1>
        <div class="featuredspeak two h-[40vw] w-[90%] mx-[auto] my-[0] flex p-[10px] gap-[20px] mt-[5vw] -mb-[1vw]">
            <a class="w-full" href="https://www.health.com/omar-carter-sudden-cardiac-arrest-story-8576514" target="_blank">

                <div class="featuredevent one h-full flex-[1] flex flex-col relative">
                    <img class="h-[50%]" src="https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    <h3 class="hidden text-center text-[black] pt-[3px] text-[1vw] italic xl:inline lg:inline">Health.com</h3>
                    <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-3/5 mx-[auto] my-[0] italic xl:inline lg:inline">Lorem ipsum dolor sit.</h2>
                </div>
            </a>
            <a class="w-full" href="https://www.heart.org/en/news/2024/02/01/nba-hopefuls-heart-stopped-on-the-court-cpr-and-an-aed-saved-his-life" target="_blank">
                
                <div class="featuredevent two h-full flex-[1] flex flex-col relative">
                    <img class="h-[80%]" src="https://images.unsplash.com/photo-1708789738414-c4a49ed21f1b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    <h3 class="hidden text-center text-[black] pt-[3px] text-[1vw] italic xl:inline lg:inline">Heart.org</h3>
                    <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-3/5 mx-[auto] my-[0] italic xl:inline lg:inline">Lorem ipsum dolor sit.</h2>
                </div>
            </a>
            <a class="w-full" href="https://medriva.com/heart-disease/the-life-saving-power-of-cpr-omar-carters-inspiring-story/" target="_blank">
                
                <div class="featuredevent three h-full flex-[1] flex flex-col relative">
                    <img class="h-[60%]" src="https://images.unsplash.com/photo-1708923780957-b934c19304df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    <h3 class="hidden text-center text-[black] pt-[3px] text-[1vw] italic xl:inline lg:inline">Medriva.com</h3>
                    <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-3/5 mx-[auto] my-[0] italic xl:inline lg:inline">Lorem ipsum dolor sit.</h2>
                </div>
            </a>
            <a class="w-full" href="https://abc11.com/omar-carter-cardiac-arrest-damar-hamlin-steph-curry/12652463/" target="_blank">
                
                <div class="featuredevent four h-full flex-[1] flex flex-col relative">
                    <img class="h-[70%]" src="https://images.unsplash.com/photo-1708834311412-243b8277056f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                    <h3 class="hidden text-center text-[black] pt-[3px] text-[1vw] italic xl:inline lg:inline">abc11.com</h3>
                    <h2 class="imgcaption hidden text-[1.2vw] text-center text-[black] w-3/5 mx-[auto] my-[0] italic xl:inline lg:inline">Lorem ipsum dolor sit.</h2>
                </div>
                
            </a>
        </div>

        <div class="firstcontainer two w-[90vw] flex h-[40vw] mb-[10vw] mt-[5vw]">
            <div class="containerdetails flex-[1] flex justify-center flex-col bg-[black]">
                <h3 class="text-[white] text-[1.75vw] text-center w-4/5 mt-[0] mx-[auto] mb-[1vw] italic">Public Speaker</h3>
                <h2 class="text-[white] text-[4vw] text-center w-[90%] mx-[auto] my-[0] font-[bolder] italic">Lorem ipsum dolor, sit amet.</h2>
            </div>
            <img class="object-cover object-center w-[60%] h-full" src="https://images.unsplash.com/photo-1698678165228-9b1bc3406adc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
    </div>

</div>


</template>