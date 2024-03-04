<script setup lang="ts">
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

  const sticky = document.querySelectorAll('.sticky');
  const stickyParent = document.querySelector('.sticky-parent');
  const aboutReveal = document.querySelectorAll('.second p');
  const aboutReveal2 = document.querySelectorAll('.revealElm');

  const images = [
    // 'https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
    'https://filecache.mediaroom.com/mr5mr_bostonscientific/206253/RESIZED_omar%20carter%20headshot.jpg',
    // 'https://d1hfln2sfez66z.cloudfront.net/06-03-2022/t_faf07b5d9de2425fb22ded6e89432f6a_name_carter.jpeg',
    'https://pbs.twimg.com/media/FU1GIyOWUBQ3TN8.jpg:large',
    'https://www.heart.org/-/media/Images/News/SFTH/0201SFTHOmarCarter_SC.jpg?sc_lang=en&hash=DAD840BCF1B701A3370CFEC833949C95',
    'https://www.charlottemagazine.com/content/uploads/data-import/23abcd30/OmarCarter-14.jpg'
  ]

  images.forEach(img => {
    sticky.forEach(section => {
      let image = document.createElement('img');
      image.src = img;
      section.querySelector('.scroll_section')?.appendChild(image);
    })
  })

  function transform (section:any) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0: percentage > 400 ? 400: percentage;
    // console.log('percentage:' + percentage)
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
    // scrollSection.style.transform = `translate3d 10vw, 0, 0)`
  }

  function reveal () {
    for (var i = 0; i < aboutReveal2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = aboutReveal2[i].getBoundingClientRect().top;
      var elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        aboutReveal2[i].classList.add('active');
      } else {
        aboutReveal2[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll',(e) => {
    for (let i = 0; i < sticky.length; i++) {
      transform(sticky[i]);
    }
    reveal();
  },true)

})

</script>



<template>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>

    <div class="maincontainer">
    <div class="headcontainer mt-[-7vh]  pt-[-3vw] flex flex-col align-middle items-center 
                justify-center w-full bg-transparent min-h-[100vh] h-[max] xl:flex xl:flex-row 
                xl:justify-evenly lg:flex lg:flex-row lg:justify-evenly bg-center bg-no-repeat bg-cover">
          <div class="imgcontainer w-[50vh] h-[50vh] border-[4px] border-[solid] border-[white] relative rounded-[50%]">
            <img class="relative object-cover object-center h-full w-full rounded-[50%]" src="https://pbs.twimg.com/media/GBPoUJ7aUAI4oDN.jpg" alt="">
          </div>
          <div class="text-center min-w-[60vh] flex flex-col justify-around h-max">
            <h1 class="text-[7vh] text-[white] italic font-[Georgia,_'Times_New_Roman',_Times,_serif] xl:text-[10vh] lg:text-[10vh] lg:mt-0">Omar Carter</h1>
            <p class="text-[2vh] text-[white] mt-[0] mx-[auto] mb-[2vh] font-['Philosopher',_sans-serif] w-full lg:text-[3vh]">Philanthropist ~ Speaker ~ Activist</p>
          </div>
    </div>
  
    <div class=" second flex flex-col align-middle items-center w-full bg-transparent min-h-[120vh] justify-evenly">
      <h2 class="revealElm text-[5vh] text-[black] font-['Philosopher','_sans-serif'] text-center w-full lg:text-[6.5vh] xl:text-[6.5vh]">About Me</h2>
      <p class="revealElm text w-3/5 text-left text-[black] font-['Philosopher','_sans-serif'] text-[1.6vh] lg:text-[2vh] xl:text-[2vh] xl:max-w-[1000px]">This story isn’t one that you hear all the time. When you hear of someone who has a “big heart” – you think of generosity, selflessness, and kindness, and while that applies to Omar Carter, his diagnosis of a “big heart” meant something completely different. Doctors diagnosed Omar with an enlarged heart, meaning his heart was too big for his body.</p>
      <p class="revealElm text w-3/5 text-left text-[black] font-['Philosopher','_sans-serif'] text-[1.6vh] lg:text-[2vh] xl:text-[2vh] xl:max-w-[1000px]">He was later cleared to continue playing basketball and his career excelled. Omar played throughout high school, was an all-conference player at Appalachian State University, and then continued his career playing overseas in several countries including Brazil and the Dominican Republic. Then in the blink of an eye, Omar’s professional basketball career was over. His heart stopped while playing basketball at the Grady Cole Center in Charlotte on July 9th, 2013.</p>
      <p class="revealElm text w-3/5 text-left text-[black] font-['Philosopher','_sans-serif'] text-[1.6vh] lg:text-[2vh] xl:text-[2vh] xl:max-w-[1000px]">He lay on the floor unconscious receiving CPR for 13 minutes until an emergency transport arrived. He later wound up in the hospital on life support and in a medically-induced coma. His life changed forever. Statistics show that 90% of people who suffer from sudden cardiac arrest do not survive. Omar was in a very small number of people who are blessed enough to receive immediate attention. Overcoming the odds for Omar meant surviving SCA when only 10% of victims do!</p>
      <p class="revealElm text w-3/5 text-left text-[black] font-['Philosopher','_sans-serif'] text-[1.6vh] lg:text-[2vh] xl:text-[2vh] xl:max-w-[1000px]">The Omar Carter Charity is committed to helping young athletes and adults alike become better prepared in the case of a cardiac emergency. We work closely with teams, youth-serving organizations and centers to raise awareness of cardiovascular health and provide CPR training and keys to healthy living. Our materials and training are geared towards educating with engaging activities and easy to learn CPR lessons. Studies now show that learning “Compression Only CPR” makes people more likely to respond. The need for this education and training is increasingly important as more than 340,000 people in the US suffer SCA every year and less than 10% survive. Our goal is to increase that statistic by promoting training to raise the number of bystanders who are able to respond. We want to teach people how to help save lives.</p>
    </div>


    <div class=" third flex flex-col align-middle items-center w-full bg-transparent min-h-[100vh] xl:min-h-[150vh] lg:min-h-[150vh] justify-around xl:justify-evenly lg:justify-evenly"> 
     
      <div class="sectionalcontainer items-center relative flex justify-around w-[65%] max-w-[1100px]">
        <img class="relative min-h-[15vh] max-h-[30vh] w-[50vh] lg:min-h-[22vh] lg:max-h-[300px] xl:min-h-[300px] xl:min-w-[60%] lg:min-w-[60%]" src="https://www.charlottemagazine.com/content/uploads/data-import/23abcd30/OmarCarter-9.jpg" alt="">
        <div class="hidden xl:inline lg:inline textdesign max-w-[23vw] 
                    text-center xl:max-w-[300px] lg:max-w-[250px] hover:cursor-pointer
                    rounded-[50%] p-[4vw] relative [transition:.3s_ease-in-out] z-10">
          <p class="hidden text-white font-['Philosopher','_sans-serif'] text-[1.25vh] w-[100%] xl:inline xl:max-w-[400px] lg:text-[1.75vh] xl:text-[1.75vh] lg:max-w-[250px] lg:inline ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus eum ut facere quo quaerat sequi enim! Inventore neque cumque, assumenda, atque omnis, ut laborum molestias ipsa aspernatur non harum?</p>
        </div>
      </div>

      <div class="sectionalcontainer items-center relative flex justify-around w-[65%] max-w-[1100px]">
        <div class="hidden xl:inline lg:inline textdesign max-w-[23vw] 
                    text-center xl:max-w-[300px] lg:max-w-[250px] hover:cursor-pointer
                    rounded-[50%] p-[4vw] relative [transition:.3s_ease-in-out] z-10">
          <p class="hidden text-white font-['Philosopher','_sans-serif'] text-[1.25vh] w-[100%] xl:inline xl:max-w-[400px] lg:text-[1.75vh] xl:text-[1.75vh] lg:max-w-[250px] lg:inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus eum ut facere quo quaerat sequi enim! Inventore neque cumque, assumenda, atque omnis, ut laborum molestias ipsa aspernatur non harum?</p>
        </div>
        <img class="relative min-h-[15vh] max-h-[30vh] w-[50vh] lg:min-h-[22vh] lg:max-h-[300px] xl:min-h-[300px] xl:min-w-[60%] lg:min-w-[60%]" src="https://www.heart.org/-/media/Images/News/SFTH/0201SFTHOmarCarter_SC.jpg?sc_lang=en&hash=DAD840BCF1B701A3370CFEC833949C95" alt="">
      </div>

      <div class="sectionalcontainer four items-center relative flex justify-around w-[65%] max-w-[1100px]">
        <img class="relative min-h-[15vh] max-h-[30vh] w-[50vh] lg:min-h-[22vh] lg:max-h-[300px] xl:min-h-[300px] xl:min-w-[60%] lg:min-w-[60%]" src="https://www.charlottemagazine.com/content/uploads/data-import/23abcd30/OmarCarter-14.jpg" alt="">
        <div class="hidden xl:inline lg:inline textdesign max-w-[23vw] 
                    text-center xl:max-w-[300px] lg:max-w-[250px] hover:cursor-pointer
                    rounded-[50%] p-[4vw] relative [transition:.3s_ease-in-out] z-10">
          <p class="hidden text-white font-['Philosopher','_sans-serif'] text-[1.25vh] w-[100%] xl:inline xl:max-w-[400px] lg:text-[1.75vh] xl:text-[1.75vh] lg:max-w-[250px] lg:inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus eum ut facere quo quaerat sequi enim! Inventore neque cumque, assumenda, atque omnis, ut laborum molestias ipsa aspernatur non harum?</p>
        </div>
      </div>

    </div>

    <div class=" fourth flex flex-col align-middle items-center w-full bg-transparent max-h-[10vh] xl:max-h-[10vh] lg:min-h-[10vh] justify-around xl:justify-evenly lg:justify-evenly"> 
    </div>

    </div>


    <!-- <div class="sticky-parent h-[310vh]">
      <div class="sticky overflow-hidden top-[100px] h-[75vh]">
        <div class="scroll_section absolute top-[0] h-full w-[330vw] flex justify-evenly px-[2vw] py-[1vw] items-center"></div>
      </div>
      xl:min-h-[22vh] xl:max-h-[350px] xl:w-[70%] xl:max-w-[700px] used for the images above.. not needed in sticky
    </div> -->



</template>

<style>
  @import url('./secondary.css');
    #sortbox:checked ~ #sortboxmenu {
        opacity: 1;
    }

    .headcontainer {
      background-image: url('https://images.unsplash.com/photo-1573869522166-0eed5b27f2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      --mask: conic-gradient(from -65deg at bottom,#0000,#000 1deg 129deg,#0000 130deg) 50%/60.05px 100%;
      -webkit-mask: var(--mask);
      mask: var(--mask);
    }

    .scroll_section {
      will-change:transform;
      margin-left: 7vh;
    }

    .scroll_section img {
      width: 50vw;
      height: 70%;
      object-fit: cover;
      object-position: center;
    }

    .scroll_section img:not(:nth-child(1)) {
      margin-left: 20vh; 
    }

    .imgcontainer {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; /* come back and edit.. make the shadow a little darker now that the background is red */
    }

    .revealElm {
      opacity: 0%;
      position: relative;
      transform: translateY(150px);
      transition: 1.3s all ease-in-out;
    }

    .revealElm.active {
      opacity: 100%;
      transform: translateY(0);
    }

    .textdesign {
    background-image: url('https://images.unsplash.com/photo-1573869522166-0eed5b27f2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    scale: .9;
    }

    .textdesign:hover {
        scale: 1;
    }

</style>
