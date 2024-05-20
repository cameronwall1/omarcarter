<template>
  <title>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
  </title>
  <!-- <div class="minicontainer">
        <div class="landing-text">
            <h4>Activist ~ Philanthropist ~ Survivor</h4>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h3>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</h3>
            <div class="landingbuttons">
            </div>
        </div>
    </div> -->

  <!--Major components go here-->
  <LargeAboutComponent ></LargeAboutComponent>
  <MissionSpacerComponentVue id="missionComponent"></MissionSpacerComponentVue>
  <UpdatedContactVue id="contactComponent"></UpdatedContactVue>

  <!--Video of Omar found on mainpage goes here-->
  <div
    id="moreComponent"
    class="h-[60vw] md:h-[40vw] fifth-about flex flex-col align-middle items-center text-[3vw] w-full bg-transparent justify-around xl:justify-evenly lg:justify-evenly"
  >
    <h1>Watch Omar in Action</h1>
    <div class="videocontainer w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%]">
      <iframe
        class="w-[100%]"
        src="https://www.youtube.com/embed/RAh02Bn1T8o?si=u9KwzcFp9QwOWxEr?rel=0&amp;autoplay=1&mute=1"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!--Card elements for Omars stories and videos go here-->
  <h3 id="highlight-articles" class="text-[14px] md:text-[1.5vw] ml-[-10%] w-[93%] -mb-[2%] pl-[7%] mt-[4%] text-left font-semibold tracking-[1px] scrollspy">
    Featured Stories
  </h3>
  <div
    class="popularsources grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(3,_1fr)]"
  >
    <!-- using slots which is why there so much code here -->
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <!-- <img src="https://1000logos.net/wp-content/uploads/2023/10/Maison-Margiela-Logo.png" alt=""> -->
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/ESPN-logo.png"
          style="padding: 0.4vw"
          alt=""
        />
      </template>
      <template #title-element>
        <p>ESPN - E:60</p>
      </template>
      <template #caption-element>
        <p>"Steph Curry and Omar Carter.."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">movie</span>
      </template>
      <template #hyper-link>
        <a
          href="https://www.youtube.com/watch?v=7zMIpyRwlgA&t=1s"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <!-- <img src="https://www.wsoctv.com/pf/resources/images/sites/cmg-tv-10030/station-logo.png?d=825" style="padding: .5vw;" alt=""> -->
        <!-- <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/abc-broadcast-logo-2021.png" alt=""> -->
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Abc-news-logo.png/800px-Abc-news-logo.png"
          style="padding: 0.4vw"
          alt=""
        />
      </template>
      <template #title-element>
        <p>ABC</p>
      </template>
      <template #caption-element>
        <p>"Basketball player continues.."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">article</span>
      </template>
      <template #hyper-link>
        <a
          href="https://www.wsoctv.com/news/local/man-finds-new-purpose-after-cardiac-arrest-leaving-him-unresponsive-13-minutes/PHOTAXSJU5HLRMRM32JP57FFY4/"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <img
          src="https://news.bostonscientific.com/file.php/201083/BSC_wtag_black_rgb-large+update+1.png?thumbnail=asset"
          style="padding: 0.5vw"
          alt=""
        />
      </template>
      <template #title-element>
        <p>Boston Scientific</p>
      </template>
      <template #caption-element>
        <p>"Beating the odds after.."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">article</span>
      </template>
      <template #hyper-link>
        <a
          href="https://news.bostonscientific.com/omar-carter-sudden-cardiac-arrest-basketball"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <img
          src="https://www.health.com/thmb/z1r0hqOFfwTtRA3rF6H9sXcVDl0=/112x112/filters:no_upscale():max_bytes(150000):strip_icc()/Health2.0SchemaLogo-88138fc1289044118346c4a5e0a6c8b3.png"
          alt=""
        />
      </template>
      <template #title-element>
        <p>Heatlh</p>
      </template>
      <template #caption-element>
        <p>"Young, Black Athletes .."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">article</span>
      </template>
      <template #hyper-link>
        <a
          href="https://www.health.com/omar-carter-sudden-cardiac-arrest-story-8576514"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/02/American-Heart-Association-Logo-2010.png"
          alt=""
        />
      </template>
      <template #title-element>
        <p>American Heart Association</p>
      </template>
      <template #caption-element>
        <p>"NBA Hopeful Heart Stopped.."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">article</span>
      </template>
      <template #hyper-link>
        <a
          href="https://www.heart.org/en/news/2024/02/01/nba-hopefuls-heart-stopped-on-the-court-cpr-and-an-aed-saved-his-life"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
    <PopularSourceVue class="sources first">
      <template #image class="inherit-image-two">
        <!-- <img src="https://www.abcinstantaccess.com/images/abc.png" alt=""> -->
        <!-- <img src="https://boldmusiclessons.com/wp-content/uploads/2022/12/charlotte-observer-logo.png" alt=""> -->
        <img
          src="https://www.labreabakery.com/sites/default/files/styles/in_the_news_thumb_278x358_/public/2017-06/LBB_News_images-charlotteobserver.png?itok=SOxylBh8"
          alt=""
        />
      </template>
      <template #title-element>
        <p>The Charlotte Observer</p>
      </template>
      <template #caption-element>
        <p>"It happened to me too.."</p>
      </template>
      <template #icon-element>
        <span class="material-symbols-outlined">article</span>
      </template>
      <template #hyper-link>
        <a
          href="https://www.charlotteobserver.com/sports/spt-columns-blogs/scott-fowler/article270720487.html"
          target="_blank"
          class="style-link"
        ></a>
      </template>
    </PopularSourceVue>
  </div>

  <footer class="">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div class="flex justify-center space-x-10">
        <a
          href="https://www.facebook.com/people/Omar-Carter/866705413/?paipv=0&eav=AfbBAIb82xE6y9Doz_57vBeqRdKA_M1zCdz25oiWirSkBr1x0TukrK_iLIrYvfi-MTM&_rdr"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/omarcarterr/"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            style="color: rgb(197, 195, 195)"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
        <a href="https://twitter.com/Omarcarter21" target="_blank">
          <span class="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            style="color: rgb(197, 195, 195)"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; {{ new Date().getFullYear() }} Omar Carter. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import PopularSourceVue from "./PopularSource.vue";
import MissionSpacerComponentVue from "./MissionSpacerComponent.vue";
import LargeAboutComponent from "./LargeAboutComponent.vue";
import UpdatedContactVue from "./UpdatedContact.vue";

onMounted(() => {
  const landingimage = document.querySelector(".container");
  const sources = document.querySelectorAll(".sources");
  console.log(document.querySelectorAll('.scrollspy'))
  console.log(sources);

  window.addEventListener("load", (e) => {
    landingimage?.classList.add("zoom");
  });

  sources.forEach((e) => {
    e.addEventListener("click", (el) => {
      sources.forEach((remove) => {
        remove.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.minicontainer {
  margin-top: 6%;
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("https://www.omarcarterfoundation.org/assets/banner-xl-30e19674.jpg");
  background-position: center;
  background-size: cover;
  transition: 5s ease-in;
}

/* seems to be unused start*/
.landing-text {
  position: relative;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  /* border: 3px solid white; */
  /* padding-left: 1rem; */
}

.landing-text h1 {
  font-size: 4rem;
  /* border: 3px solid white; */
  width: 100%;
  text-align: center;
}

.landing-text h3 {
  font-size: 1.4rem;
  text-align: center;
}

.landing-text h4 {
  font-size: 1.3rem;
}
/* seems to be unused end*/

.landing-image {
  /* border: 3px solid red; */
  height: 80%;
  width: 40%;
  background-image: url("https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}

.container.zoom {
  transform: scale(1.05);
}

.quote {
  border: 1px solid white;
  height: 4vw;
  width: 100%;
  background-color: #e7e7e7;
  background-color: black;
  background-color: rgb(244 63 94);
  color: rgb(64, 64, 64);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.1%;
  font-size: 1vw;
}

.popularsources {
    width: 90%;
    gap: 2vw;
    margin-top: 3.5%;
    justify-content: space-around;
    transition: transform 2s ease-in;
  /* height: 20vh;
  border: 3px solid red;
  display: flex;
  display: grid;
  grid-template-columns: repeat(2, 1fr); */
}

/* seems to be unused */
.popularsources.two {
  /* align-self: flex-start; */
  /* border: 3px solid red; */
  gap: 1vw;
  justify-content: space-around;
  margin-top: 2%;
  /* margin-left: 3vw; */
  /* padding-left: 1.5vw; */
  width: 95%;
  width: 90%;
}
/* seems to be unused end*/

.popularsources .first {
  transition: 400ms ease-in-out;
}

.popularsources .first:hover {
  cursor: pointer;
  transform: scale(1.07);
  z-index: 3;
  /* height: 10vw;
        top: 5%;
        transform: translateY(-5%); */
}

.popularsources .first.active,
.popularsources .second.active,
.popularsources .third.active,
.popularsources .fourth.active,
.popularsources .fifth.active {
  top: 0%;
  /* transform: scale(1.07); */
  /* height: 9.5vw;
        transform: translateY(-5%); */
}

#highlight-articles {
  /* border: 3px solid red; */
  /* width: 93%;
  margin-bottom: -2%;
  padding-left: 7%;
  margin-top: 4%;
  text-align: left;
  font-weight: 600;
  letter-spacing: 1px; */
  /* font-size: 1.5vw; */
}

.largepopularsources {
  margin-top: 3%;
  /* border: 3px solid red; */
  width: 85%;
  display: flex;
  gap: 25px;
  padding: 10px;
}

.inherit-image-two {
  border: 3px solid red;
  width: 10px;
  height: 10px;
}

#missionComponent {
  margin-top: 10%;
  margin-bottom: 3%;
}

.fifth-about {
  background-color: black;
  width: 100%;
  margin-top: 7%;
  max-height: 700px;
  /* height: 40vw; */
}

.fifth-about h1 {
  color: white;
  /* font-size: 3vw; */
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 2vw;
}

.videocontainer {
  /* min-height: 50vh; */
  /* width: 80%; */
  position: relative;
  margin-top: -3vw;
  height: 80%;
  max-height: 500px;
}

.videocontainer iframe {
  /* width: 100%; */
  /* height: 27vw; */
  height: 100%;
  padding-bottom: 1%;
  position: relative;
}
</style>
