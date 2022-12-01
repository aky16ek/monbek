let maker = document.querySelector('#maker');
let list = document.querySelectorAll('ul li');
function moveIndicator(e){
    maker.style.left = e.offsetLeft+'px';
    maker.style.width = e.offsetWidth+'px';
}
list.forEach(link => {
    link.addEventListener('mousemove',(e) => {
        moveIndicator(e.target);
    })
})
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
    item.addEventListener('mouseover' , activeLink ));
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",    grabCursor: true,    centeredSlides: true,    slidesPerView: "auto",    coverflowEffect: {
        rotate: 50,        stretch: 0,        depth: 100,        modifier: 1,        slideShadows: true,    },    pagination: {
        el: ".swiper-pagination",    },});