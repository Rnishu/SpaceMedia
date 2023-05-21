const planets = document.querySelectorAll('.planet');
const p_radii = [35,40,50,70,112,138,165,190];
let p_radians = new Array(8).fill(0);
const p_velocities = [0.1, 0.05,0.1,0.8, 0.434, 0.323, 0.228, 0.182];


setInterval( ()=> {
  planets.forEach( (planet, index)=>{
    planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]*2}vmin`;
    planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`;
    p_radians[index] += p_velocities[index] * 0.02;
    if(p_radians[index]%6.28<=Math.PI){
        planet.style.zIndex=100;
    }else{
        planet.style.zIndex=20;
    }
  })
}, 10);