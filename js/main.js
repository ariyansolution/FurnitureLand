
  const openNavBtn = document.querySelector(".open-nav");
  const closeNavBtn = document.querySelector(".close-nav");
  openNavBtn.addEventListener("click", toggleNav);
  closeNavBtn.addEventListener("click", toggleNav);
  function toggleNav() {
    document.querySelector(".nav").classList.toggle("open")
  }





// ARMCHAIR
function armchair1(){
  document.getElementById('armchair').src='img/feature-img1.png';
}
function armchair2(){
  document.getElementById('armchair').src='img/feature-img1-1.png';
}
function armchair3(){
  document.getElementById('armchair').src='img/feature-img1-2.png';
}
function armchair4(){
  document.getElementById('armchair').src='img/feature-img1-3.png';
}
function armchair5(){
  document.getElementById('armchair').src='img/feature-img1-4.png';
}  

// TABLE
function table1(){
  document.getElementById('table').src='img/feature-img2.png';
}
function table2(){
  document.getElementById('table').src='img/feature-img2-1.png';
}
function table3(){
  document.getElementById('table').src='img/feature-img2-2.png';
}
function table4(){
  document.getElementById('table').src='img/feature-img2-3.png';
}
function table5(){
  document.getElementById('table').src='img/feature-img2-4.png';
}  

// SOFA
function sofa1(){
  document.getElementById('sofa').src='img/feature-img3.png';
}
function sofa2(){
  document.getElementById('sofa').src='img/feature-img3-1.png';
}
function sofa3(){
  document.getElementById('sofa').src='img/feature-img3-2.png';
}
function sofa4(){
  document.getElementById('sofa').src='img/feature-img3-3.png';
}
function sofa5(){
  document.getElementById('sofa').src='img/feature-img3-4.png';
}  

// HERMAN SOFA
function hermansofa1(){
  document.getElementById('hermansofa').src='img/feature-img4.png';
}
function hermansofa2(){
  document.getElementById('hermansofa').src='img/feature-img4-1.png';
}
function hermansofa3(){
  document.getElementById('hermansofa').src='img/feature-img4-2.png';
}
function hermansofa4(){
  document.getElementById('hermansofa').src='img/feature-img4-3.png';
}
function hermansofa5(){
  document.getElementById('hermansofa').src='img/feature-img4-4.png';
}  


$(document).ready(function(){
	$(".icon").click(function(){
	   $(".icon").toggleClass("active");
	   $("input[type='text']").toggleClass("active");
	});
});



// owlCarousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
	items:1,
  nav:false,
	dots:true,
	autoplay:true,
	autoplayTimeout:5000,
	smartSpeed:800,
	autoplayHoverPause:false,
})

