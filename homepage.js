/*function removes and adds show class according to section 
becoming visible on screen.
IntersectionObserver api looks out for elements that intersect
with root element i.e.; viewport or any other element. When elements
interact this class can be used to call a function to manipulate.
Enteries is an array of elements that intersect. Code below targets
the sections with class="iHidden"*/
const observer = new IntersectionObserver((enteries) => {
      setInterval(
      enteries.forEach((entry) => {
          console.log(entry); 
                  if(entry.isIntersecting){
                        entry.target.classList.add('show');
                  } else {
                        entry.target.classList.remove('show');
                  }
      }),2000);
  });
const hiddenSection = document.querySelectorAll('.iHidden');
hiddenSection.forEach((el) => observer.observe(el));
