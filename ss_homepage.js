/*The program that runs the solar system animation
we start with targetting all planets using 'planet' class
then we make a array. We manually enter an array for radius and 
velocity. setInterval is used to run fucntion repeatively on 10 millisecond 
interval. Top and left properties are altered in small time. Values given is 
product of radius and cosine fucntion of radian at the instant for left(x) and
product of radius and sine fucntion of radian at the instant ofr top (y). This
would actually giver circular revolution, but multiply the left component with 2.
then according to the position of revolution, z index is changed to make the planet
go behind the sun while rotating.*/ 
const planets = document.querySelectorAll('.planet');
const p_radii = [20,40,20,50,70,38,65,50];
let p_radians = new Array(8).fill(0);
const p_velocities = [0.1, 0.05,0.1,0.1, 0.07, 0.05, 0.1, 0.09];


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
