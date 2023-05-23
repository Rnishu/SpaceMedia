function const_view(planet){
    const planet_text = document.getElementByCLass("planet_div_text");
    planet_text[planet].style.opacity="100%";
    }
function const_disappear(planet){
    const planet_text = document.getELementByClass("planet_div_text");
    planet_text[planet].style.opacity="0%"
}
function view(num){
  if(num == 1){
        document.getElementById("planet_1_div_text").style.animation="fade 2s ease-out 0.5s";
        setTimeout(const_view(num),2000);
  }else if(num == 2){
        document.getElementById("planet_2_div_text").style.animation="fade 2s ease-out 0.5s";
        setTimeout(const_view(num),2000);
  }else if(num == 3){
        document.getElementById("planet_3_div_text").style.animation="fade 2s ease-out 0.5s";
        setTimeout(const_view(num),2000);
  }else if(num == 4){
        document.getElementById("planet_4_div_text").style.animation="fade 2s ease-out 0.5s";
        setTimeout(const_view(num),2000);
  }
}
function disappear(num){
  if(num == 1){
        document.getElementById("planet_1_div_text").style.animation="fade 2s ease-out 0.5s reverse";
        setTimeout(const_disappear(num),2000);
  }else if(num == 2){
        document.getElementById("planet_2_div_text").style.animation="fade 2s ease-out 0.5s reverse";
        setTimeout(const_disappear(num),2000);
  }else if(num == 3){
        document.getElementById("planet_3_div_text").style.animation="fade 2s ease-out 0.5s reverse";
        setTimeout(const_disappear(num),2000);
  }else if(num == 4){
        document.getElementById("planet_4_div_text").style.animation="fade 2s ease-out 0.5s reverse";
        setTimeout(const_disappear(num),2000);
  }
}
const planet_text = document.getElementsByClassName("planet_div_text");
function const_view(planet){
    planet_text[planet].style.opacity="100%";
}
for(let i=0;i<planet_text.length;i++){
    setTimeout(const_view,4000,i);
}
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
function loginPage(){
      document.querySelectorAll('.section').style.display="none";
}