<script setup lang="ts">

</script>

<template>

  <main class="w-full bg-[linear-gradient(120deg,_#fdfbfb_0%,_#ebedee_100%)]">
    <div class="header-elements h-[10vh] min-h-[5vh] flex justify-between items-center z-10 italic font-['Philosopher',_sans-serif] bg-white w-full">
        <div class="title h-max flex">
          <svg view-box="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="h-8 w-8 text-green-500 border-[3px] border-[solid] border-[red] rounded-[50%] mr-[1vw] ml-[1.5vw]">
            <path d="M226.629 146.669c23.927-43.467 56.293-69.359 100.176-82.794 66.505-20.365 129.817 23.81 144.445 82.309 11.867 47.438-12.54 103.141-59.481 134.97-36.946 25.061-75.466 47.813-113.067 71.933-34.08 21.85-53.021 32.188-103.8 82.765-4.395 4.378 2.737-19.354 4.706-24.244 13.253-32.898 37.853-56.697 67.084-75.494 28.162-18.125 57.639-34.227 85.689-52.516 14.739-9.603 28.799-20.879 41.204-33.349 34.513-34.676 26.214-87.478-9.738-113.411-19.453-14.025-39.321-22.883-62.774-24.945-67.6-5.943-93.242 89.612-101.768 89.033-8.306-.565-1.819-74.036-65.919-100.771-34.088-14.218-58.382 9.147-51.252 44.947 2.708 13.57 8.614 26.852 15.09 39.32.03.058 82.651 133.028 63.458 190.673-2.585 7.763-14.921-25.038-18.799-35.753-9.984-27.635-28.786-46.093-47.087-68.441-30.84-37.671-74.272-70.225-68.499-129.092 4.521-46.111 30.161-80.735 69.271-86.671 45.509-6.914 99.106 35.565 111.061 91.531"></path>
          </svg>
          <div class="hidden text-[4.5vh] text-black md:block lg:block">Omar Carter</div>
        </div>
        <div class="hidden md:block lg:block links">
          <ul class="list h-max list-none flex w-[35vh] justify-around items-center text-white mr-[1vw]">
            <li class="relative text-xl after:bg-black text-black after:absolute after:h-[.1vw] after:w-0 after:bottom-[-.1vw] after:left-0 hover:after:w-[100%] after:transition-all after:duration-700 cursor-pointer"><RouterLink to="/">Home</RouterLink></li>
            <li class="relative text-xl after:bg-black text-black after:absolute after:h-[.1vw] after:w-0 after:bottom-[-.1vw] after:left-0 hover:after:w-[100%] after:transition-all after:duration-700 cursor-pointer"><RouterLink to="/speaking">Speaking</RouterLink></li>
            <li class="relative text-xl after:bg-black text-black after:absolute after:h-[.1vw] after:w-0 after:bottom-[-.1vw] after:left-0 hover:after:w-[100%] after:transition-all after:duration-700 cursor-pointer"><RouterLink to="/contact">Contact Me</RouterLink></li>
          </ul>
        </div>
        
        <div class="md:hidden lg:hidden relative">
          
        <input type="checkbox" id="sortbox" class="hidden absolute">
        <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
        <span class="text-lg">
          <span class="material-symbols-outlined text-black">menu</span>
        </span>
        </label>
            <div id="sortboxmenu" class="lg:block absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-black border border-white transition delay-75 ease-in-out z-10">
              <ul class="text-center text-gray-900">
                <li><a href="/" class="block text-white px-3 py-1 hover:bg-gray-200 hover:text-black text-[1.75vw]">Home</a></li>
                <li><a href="/speaking" class="block text-white px-3 py-1 hover:bg-gray-200 hover:text-black text-[1.75vw]">Speaking</a></li>
                <li><a href="/contact" class="block text-white px-3 py-1 hover:bg-gray-200 hover:text-black text-[1.75vw]">Contact Us</a></li>
              </ul>
            </div>
        </div>


      </div>
      <RouterView/>
  </main>

  

  <footer class="border-t border-zinc-800/50">
    
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div class="pb-6">
          <a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Home</a>
        </div>
        <div class="pb-6">
          <a href="/speaking" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Speaking</a>
        </div>
        <div class="pb-6">
          <a href="/contact" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact Me</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a href="https://www.facebook.com/people/Omar-Carter/866705413/?paipv=0&eav=AfbBAIb82xE6y9Doz_57vBeqRdKA_M1zCdz25oiWirSkBr1x0TukrK_iLIrYvfi-MTM&_rdr" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://www.instagram.com/omarcarterr/" target="_blank" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" style="color: rgb(197, 195, 195)" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://twitter.com/Omarcarter21">
          <span class="sr-only">Twitter</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" style="color: rgb(197, 195, 195)" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }} Omar Carter. All rights reserved.
      </p>
    </div>

  </footer>

</template>

  <style>
  @import url('./views/secondary.css');
  .title {
    /* border: 3px solid palevioletred; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
