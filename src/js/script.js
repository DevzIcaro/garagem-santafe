/*NAVBAR MENU*/
function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'none'
}
/* FIM NAVBAR MENU*/

/* SCROLLTO EVENT*/
const links = document.querySelectorAll("li");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});


/* SCROLL EVENT END*/

/*CAROUSEL CARRO*/
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;


document
    .getElementById('carousel_button--next')
    .addEventListener("click", function(){
        moveToNextSlide();
    })

document
    .getElementById('carousel_button--prev')
    .addEventListener("click", function(){
        moveToPrevSlide();
    })

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('card-visivel');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('card-visivel');
    
}

function moveToNextSlide(){
    if(slidePosition == totalSlides -1){
        slidePosition = 0;
    }else{
        slidePosition ++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if(slidePosition == 0){
        slidePosition = totalSlides -1; 
    }else{
        slidePosition --;
    }
    updateSlidePosition();
}
/*FIM CAROUSEL CARRO*/

/*FADE IN PARA OBJETOS DA PAGINA */
const topicos = document.querySelectorAll(".topicos");

document
    .addEventListener("scroll", function(){
        topicos.forEach(topicos => {
            if(isInView(topicos)){
                topicos.classList.add("topicos-visivel");
            }
        })
    })

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight -150 || documentElement.clientHeight -150)
    );
}
/* FIM FADE IN PARA OBJETOS DA PAGINA */