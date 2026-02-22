window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const arrow = document.querySelector(".arrow");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = menuBtn.querySelector("i");

  // Dropdown
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
    arrow.classList.remove("rotate");
  });

  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


// $(document).ready(function(){

//      $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('load scroll',function(){
//         $('.fa-bars').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if($(window).scrollTop()>35)
//         {
//             $('.header').css({'background':'#fff','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
//         }
//         else
//         {
//             $('.header').css({'background':'none','box-shadow':'none'});
//         }
//     });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});


  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

/* OPEN LOGIN MODAL */
function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
}

/* CLOSE LOGIN MODAL */
function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

/* PASSWORD SHOW / HIDE */
function togglePassword(){
  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  // If eye is CLOSED → open it & show password
  if (eyeIcon.classList.contains("fa-eye-slash")) {
    password.type = "text";                 // show password
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } 
  // If eye is OPEN → close it & hide password
  else {
    password.type = "password";             // hide password
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}


/* LOGIN ↔ SIGNUP TOGGLE */
let isSignup = false;

function toggleAuth(){
  isSignup = !isSignup;

  document.getElementById("formTitle").innerText =
    isSignup ? "Create Account" : "Client Login";

  document.getElementById("formSubtitle").innerText =
    isSignup ? "Register for IT services access"
             : "Access your IT services dashboard";

  document.getElementById("submitBtn").innerText =
    isSignup ? "Sign Up" : "Login";

  document.getElementById("switchText").innerText =
    isSignup ? "Already have an account?"
             : "Don’t have an account?";

  document.querySelector(".switch-text a").innerText =
    isSignup ? "Login" : "Sign up";

  document.getElementById("companyName").style.display =
    isSignup ? "block" : "none";

  document.getElementById("confirmPassword").style.display =
    isSignup ? "block" : "none";
}

/* FORM SUBMIT → REDIRECT */
function handleAuthSubmit(event){
  event.preventDefault();
  window.location.href = "404.html";
}

/* CLOSE MODAL ON OUTSIDE CLICK */
window.addEventListener("click", function(e){
  const modal = document.getElementById("loginModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  const header = acc.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordions.forEach(item => {
      if(item !== acc){
        item.classList.remove("active");
      }
    });
    acc.classList.toggle("active");
  });
});

$(document).ready(function () {
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: false,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1000: { items: 5 }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = Number(counter.dataset.target);
      const current = Number(counter.innerText);
      const increment = Math.max(target / 200, 1);

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});