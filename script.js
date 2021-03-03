const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('exrept')
const spans = document.querySelectorAll('span')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(()=>{
    hyy()
},2500)
function hyy(){
    header.innerHTML = `<img src="./bg5.jpg" alt="" />`
    excerpt.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
    sed?
    `
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`
    names.innerHTML = `John Doe`
    date.innerHTML = `Feb 02, 2021`
    animated_bgs.forEach(bg=>{
        bg.classList.remove("animated-bg")
    })
    animated_bg_texts.forEach(bg=>{
        bg.classList.remove("animated-bg-text ")
    })
}


















// header.className = `animated-bg`
// title.className = `animated-bg animated-bg-text`
// profile_img.className = `animated-bg`
// names.className = `animated-bg animated-bg-text`
// date.className = `animated-bg animated-bg-text`
// spans.forEach(element => {
//     element.className = `animated-bg animated-bg-text`
// });