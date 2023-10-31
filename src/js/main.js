//Animatie 
const typed = new Typed('.beginpagina__span', {
    strings:[ "Web Developer",  "Backend developer" ,"Software Developer",],
    typedSpeed: 100,
    backSpeed: 60,
    loop:false
})

window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.top');
    if (window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });


