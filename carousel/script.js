const carousel = document.querySelector('.carousel');
const next = carousel.querySelector('.next');
const previous = carousel.querySelector('.previous');
const carouselItems = carousel.querySelectorAll('.carousel-item');
let activeItem = carousel.querySelector('.carousel-item.active');
let currentPosition = 0;
let interval;

next.addEventListener('click', ()=>{
    currentPosition++
    slide()
})

previous.addEventListener('click', ()=>{
    currentPosition--
    slide()
})

carousel.addEventListener('mouseover', (e)=>{
    clearTimeout(interval)
})

carousel.addEventListener('mouseleave', (e)=>{
    interval = setTimeout(autoSlide, 3000)
})

function slide(){
    if(carouselItems.length-1 < currentPosition) currentPosition = 0
    if(currentPosition < 0) currentPosition = carouselItems.length-1
    document.querySelector('.carousel-item.active').classList.remove('active')
    carouselItems.forEach((item, key) => {
        if(key == currentPosition){
            item.classList.add('active')
        }
    })
}


function autoSlide(){
    currentPosition++
    slide()
    interval = setTimeout(autoSlide, 3000)
}

autoSlide();
        
