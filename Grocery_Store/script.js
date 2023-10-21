let search =document.querySelector('.search-form')

document.getElementById("search-btn").onclick= ()=>{
    search.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}

let shoppingCart =document.querySelector('.shopping-cart')

document.getElementById("cart-btn").onclick= ()=>{
    shoppingCart.classList.toggle('active');
    search.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm =document.querySelector('.login-form')

document.getElementById("login-btn").onclick= ()=>{
    loginForm.classList.toggle('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll=()=>{
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 4,

    },
  },
});