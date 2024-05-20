<template>
  <header
    class="w-full min-h-[5rem] flex items-center fixed top-[0] z-10 bg-[#f6f6f6] xl:justify-around lg:justify-around xl:w-[1500px] justify-between">
    <div class="logo ml-[2%]">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        class="h-12 w-12 text-rose-500">
        <path
          d="M226.629 146.669c23.927-43.467 56.293-69.359 100.176-82.794 66.505-20.365 129.817 23.81 144.445 82.309 11.867 47.438-12.54 103.141-59.481 134.97-36.946 25.061-75.466 47.813-113.067 71.933-34.08 21.85-53.021 32.188-103.8 82.765-4.395 4.378 2.737-19.354 4.706-24.244 13.253-32.898 37.853-56.697 67.084-75.494 28.162-18.125 57.639-34.227 85.689-52.516 14.739-9.603 28.799-20.879 41.204-33.349 34.513-34.676 26.214-87.478-9.738-113.411-19.453-14.025-39.321-22.883-62.774-24.945-67.6-5.943-93.242 89.612-101.768 89.033-8.306-.565-1.819-74.036-65.919-100.771-34.088-14.218-58.382 9.147-51.252 44.947 2.708 13.57 8.614 26.852 15.09 39.32.03.058 82.651 133.028 63.458 190.673-2.585 7.763-14.921-25.038-18.799-35.753-9.984-27.635-28.786-46.093-47.087-68.441-30.84-37.671-74.272-70.225-68.499-129.092 4.521-46.111 30.161-80.735 69.271-86.671 45.509-6.914 99.106 35.565 111.061 91.531"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div class="menuitems w-[30rem] hidden lg:block xl:block">
      <ul class="sticky top-0 inline-flex w-full justify-between">
        <li class="bg-[left_bottom_0] [background-size:0_2px] bg-no-repeat pb-[0.25em] [transition:background-size_700ms] hover:[background-size:100%_2px] hover:cursor-pointer">
          <a href="#" id="headerlink" class="block active-link xl:text-[17px]">Home</a>
        </li>
        <li class="bg-[left_bottom_0] [background-size:0_2px] bg-no-repeat pb-[0.25em] [transition:background-size_700ms] hover:[background-size:100%_2px] hover:cursor-pointer">
          <a href="#missionComponent" id="headerlink" class="block xl:text-[17px]">Mission</a>
        </li>
        <li class="bg-[left_bottom_0] [background-size:0_2px] bg-no-repeat pb-[0.25em] [transition:background-size_700ms] hover:[background-size:100%_2px] hover:cursor-pointer"> 
          <a href="#contactComponent" id="headerlink" class="block xl:text-[17px]">Contact</a>
        </li>
        <li class="bg-[left_bottom_0] [background-size:0_2px] bg-no-repeat pb-[0.25em] [transition:background-size_700ms] hover:[background-size:100%_2px] hover:cursor-pointer">
          <a href="#highlight-articles" id="headerlink" class="block xl:text-[17px]">Featured</a>
        </li>
      </ul>
   
    </div>
    <div class="lg:hidden relative">
      <input type="checkbox" id="sortbox" class="hidden absolute" />
      <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
        <span class="text-lg">
          <span class="material-symbols-outlined text-black">menu</span>
        </span>
      </label>
      <div
        id="sortboxmenu"
        class="lg:block absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-white border border-white transition delay-75 ease-in-out z-10">
        <ul class="text-center text-gray-900">
          <li>
            <a
              href="#"
              class="block text-black px-3 py-1 hover:bg-gray-200 hover:text-black text-[3vw]">Home 
            </a>
          </li>
          <li>
            <a
              href="#missionComponent"
              class="block text-black px-3 py-1 hover:bg-gray-200 hover:text-black text-[3vw]">
              Mission
            </a>
          </li>
          <li>
            <a
              href="#contactComponent"
              class="block text-black px-3 py-1 hover:bg-gray-200 hover:text-black text-[3vw]">
              Contact
              </a>
          </li>
          <li>
            <a
              href="#highlight-articles"
              class="block text-black px-3 py-1 hover:bg-gray-200 hover:text-black text-[3vw]">
              Featured Stories
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="actionbutton hidden lg:block xl:block">
      <ActionButtton>
        <template #button-link>
          <a href="#contactComponent">Contact</a>
        </template>
      </ActionButtton>
    </div>
  </header> 
  <div
    class="overlay fixed top-0 left-0 w-screen h-full hidden bg-[rgba(0,_0,_0,_0.7)] z-10"
    id="popup-1">
    <form action="" class="header-form">
      <div class="text-[2vw] contact-header">
        Contact Me <span class="btn">&times;</span>
      </div>
      <span class="close-button">&times;</span>
      <input
        type="text"
        required
        id="fname"
        name="firstname"
        placeholder="Your first name.."/>
      <input
        type="text"
        required
        id="lname"
        name="lastname"
        placeholder="Your last name.."/>
      <input
        type="email"
        required
        id="email"
        name="email"
        placeholder="Your email address.."/>
      <input
        type="text"
        required
        id="location"
        name="location"
        placeholder="City/State.."/>
      <input
        type="text"
        required
        id="organization"
        name="organization"
        placeholder="Your industry.."/>
      <input type="date" required id="date" name="date" />
      <input
        type="textarea"
        id="comments"
        name="comments"
        placeholder="Additional comments..."/>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import ActionButtton from "./ActionButtton.vue";

onMounted(() => {
  var closebtn = document.querySelector(".btn");
  var actionbtn = document.querySelector(".actionbutton");
  var headerElements = document.querySelectorAll('#headerlink');
  var missionView = document.querySelector('.missionComponent')

  closebtn?.addEventListener("click", (e) => {
    console.log("btn clicked");
  });
  actionbtn?.addEventListener("click", (e) => {
    console.log("open dialogue");
  });

  actionbtn?.addEventListener("click", togglePopup);
  closebtn?.addEventListener("click", togglePopup);

  function togglePopup() {
    document.getElementById("popup-1")?.classList.toggle("active");
  }

  

  // var inlinelinks = document.querySelectorAll(".inline-links");

  // inlinelinks[0].addEventListener("click", function () {
  //   window.scrollTo(0, 0);
  // });

  // inlinelinks.forEach((e) => {
  //   e.addEventListener("click", function () {
  //     inlinelinks.forEach(
  //       (e) =>
  //         function () {
  //           e.classList.remove("active");
  //         }
  //     );
  //     e.classList.add("active");
  //   });
  // });



});
</script>

<style>

#sortbox:checked ~ #sortboxmenu {
  opacity: 1;
}

header {
  border-bottom: 1px solid gainsboro;
  /* border: 3px solid red; */
  /* width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #f6f6f6;
  border-bottom: 1px solid gainsboro; */
}

.menuitems {
  /* width: 30rem; */
  /* display: none; */
}

.logo {
  /* margin-left: 5%; */
}

.menuitems ul {
  list-style: none;
  /* display: inline-flex;
  width: 100%;
  justify-content: space-between; */
}

.menuitems ul li {
  background-image: linear-gradient(rgb(244 63 94), rgb(244 63 94));
  color: #b0b1ad;
  /* background-position: left bottom 0;
  background-size: 0 2px;
  background-repeat: no-repeat;
  padding-bottom: 0.25em;
  transition: background-size 700ms; */
}

/* .menuitems ul li:hover {
  background-size: 100% 2px;
  cursor: pointer;
} */

.menuitems ul li:nth-child(1):hover,
.menuitems ul li:nth-child(5):hover {
  background-size: 75% 2px;
}

/* .overlay.active { */
  /* display: block; */
/* } */
</style>
