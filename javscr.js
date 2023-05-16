const planets = document.querySelectorAll('.planet')
const p_radii = [30,33,50,70,112,138,165,190]
let p_radians = new Array(8).fill(0)
const p_velocities = [0.2, 1.174,1,0.802, 0.434, 0.323, 0.228, 0.182]


setInterval( ()=> {
  planets.forEach( (planet, index)=>{
    if(p_radians[index]%6.28<=Math.PI)
    planet.style.zIndex = 100;
    else
    planet.style.zIndex=20;
    planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]*2}vmin`
    planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
    p_radians[index] += p_velocities[index] * 0.02
  })
}, 1)

