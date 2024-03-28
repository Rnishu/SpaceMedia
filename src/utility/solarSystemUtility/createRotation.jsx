import { useEffect } from "react";
import rotate from "./rotatePlanets";
function createRotations(planetRef) {
  const numberOfPlanets = planetRef.length;
  const planetRadius = Array.from(
    { length: numberOfPlanets },
    () => Math.random() * 10 + 30
  );
  const planetVelocity = Array.from(
    { length: numberOfPlanets },
    () => Math.random() * (0.1 - 0.05) + 0.05
  );
  const planetRadian = Array.from(
    { length: numberOfPlanets },
    () => Math.random() * Math.PI * 2
  );
  useEffect(() => {
    const intervalID = rotate(
      planetRef,
      planetRadius,
      planetVelocity,
      planetRadian
    );
    return () => clearInterval(intervalID);
  }, [planetRadian, planetRadius, planetVelocity, planetRef]);
}

export default createRotations;