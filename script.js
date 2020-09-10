const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

                //toogle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

            //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation=''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 2.7 + 0.6}s` ;
            }
      
         });

            //burger animation
         burger.classList.toggle('toggle');

    });
    
  
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

navSlide();

//***************************** */
//      Image slider code
//********************************** */

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//buttonlisteners


nextBtn.addEventListener('click', ()=> {
    if(counter >= carouselImages.length -1)return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    displaytest();
   
    
});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0)return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    displaytest();
    
    
});

carouselSlide.addEventListener('transitionend',()=>{
    
    if(carouselImages[counter].id === 'last-clone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    if(carouselImages[counter].id === 'first-clone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

});

const displaytest = ()=> {
    for (i=0; i <= carouselImages.length; i++){
        if(carouselImages[i] !== counter){
            carouselImages[i].style.padding = '1%';
        }
    }
    
}