/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$(function(){
            $.fn.limit = function($n){
                this.each(function(){
                    var allText   = $(this).html();
                    var tLength   = $(this).html().length;
                    var startText = allText.slice(0,$n);
                    if(tLength >= $n){
                        $(this).html(startText+'...');
                    }else {
                        $(this).html(startText);
                    };
                });
                
                return this;
            }
            $('.username').limit(15);
        });




function showform()
{
  $(".form-order").slideToggle();
}


function jslv5(){

if (document.getElementById("lv5").value == "succes") {
  $(".sublv5").hide();
  $(".editlv5").hide();
}
else if (document.getElementById("lv5").value == "white"){
  $(".sublv5").show();
  $(".editlv5").hide();
}
else{
  $(".sublv5").hide();
  $(".editlv5").show();
}
}

window.onload=function(){
  jslv5();
  showform();
}
// function hide()
// {
//   $(".editlv5").slideToggle();
// }