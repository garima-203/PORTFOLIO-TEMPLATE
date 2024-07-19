 
//PureCounter
new PureCounter(); 

//AOS
AOS.init();

 
//Project Carousel
$(' #project .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2500, 
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4,
        }
    }
})







//banner content
let text = document.getElementById("banner-content")
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';
})
 
 

