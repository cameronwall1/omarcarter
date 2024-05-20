import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

window.addEventListener("load", function () {
    var scrollspy =  document.querySelectorAll('.scrollspy');
    var anchorlinks = this.document.querySelectorAll('#headerlink')

    console.log(scrollspy)

    function reveal () {
        for (var i = 0; i < anchorlinks.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = scrollspy[i].getBoundingClientRect().top;
        var elementVisible = 500; // changed this from 200 to 0 -- change back if need be
        // if (i > 1) {
        //     elementVisible = -800;
        // }
        // console.log(elementTop + ' - element top')
        // console.log(windowHeight - elementVisible + ' - window - elementVisible')
        // console.log('compare. window - elementVis ' + (windowHeight - elementVisible) + ' should be more than element top ' +  elementTop)
        if (elementTop < windowHeight - elementVisible) {
            anchorlinks.forEach(alinks => {
                alinks.classList.remove('active-link')
            })
            anchorlinks[i].classList.add('active-link');
            }
        }
    }

    window.addEventListener('scroll',(e) => {
        reveal();
  },true)


    // this.window.addEventListener('scroll', e => {
    //         scrollspy.forEach(sec => {
    //             var elementTop = sec.getBoundingClientRect().top;
    //             let offset = sec.offsetTop;
    //             let height = sec.offsetHeight;
    //             let id = sec.getAttribute('id')
    //             // console.log('element top: ' + elementTop)
    //             console.log('')
    //             console.log('bounding client: ' + elementTop)
    //             console.log('offset top: ' + offset)
    //             console.log('element height: ' + height)
    //             console.log('')
    //             var elementVisible = 200; // changed this from 200 to 0 -- change back if need be


    //             if (elementTop >= offset && elementTop < offset + height) {
    //                 anchorlinks.forEach(links => {
    //                     links.classList.remove('active')
    //                     this.document.querySelector("header menuitems a[href*=" + id + "]")?.classList.add('active-link')
    //                     console.log('should be in view')
    //                     console.log(links)
    //                 })
    //             }
    //         })
    //     }
    // )

    // window.onscroll = () => {
    //     scrollspy.forEach (sec => {
    //         let top = this.document.scrollTop;
    //         let offset = sec.offsetTop;
    //         let height = sec.offsetHeight;
    //         console.log(offset)
    //         console.log(height)
    //         let id = sec.getAttribute('id');
    //         console.log(id)

    //         if (top >= offset && top < offset + height) {
    //             anchorlinks.forEach(links => {
    //                 links.classList.remove('active')
    //                 this.document.querySelector("header menuitems a[href*=" + id + "]")?.classList.add('active-link')
    //             })
    //         }

    //     })
    // }

})

