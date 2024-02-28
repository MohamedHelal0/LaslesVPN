var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

const aboutw__button = document.querySelector("about__button");


// nav bar
const openNav = document.querySelector('.openNav');
const links= document.querySelector('.links');
const closNav = document.querySelector('.closNav');
const navPar = document.querySelector('.navPar');
const logo__imdge =document.querySelector('.logo__imdge');
console.log(logo__imdge)

closNav.onclick = ()=>{
  links.classList.add('display');
  openNav.classList.remove('display');
  logo__imdge.classList.remove('display');
}
openNav.onclick = ()=>{
  links.classList.remove('display');
  openNav.classList.add('display')
  logo__imdge.classList.add('display');
  navPar.style.background= 'var(--white-color)';
  
}
// links.classList.remove('display');


