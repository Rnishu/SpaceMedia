function rotate(refArray, planetRadius, planetVelocity, planetRadian) {
    const intervalId = setInterval(() => {
      refArray.forEach((ref, index) => {
        const planet = ref.current;

        if (planet && planet.getEntityElement) {
          const planetElement = planet.getEntityElement();

          if (planetElement) {
            planetElement.style.left = `${
              Math.cos(planetRadian[index]) * planetRadius[index] * 2
            }vmin`;
            planetElement.style.top = `${
              Math.sin(planetRadian[index]) * planetRadius[index]
            }vmin`;
            planetRadian[index] += planetVelocity[index] * 0.02;

            if (planetRadian[index] % (2 * Math.PI) <= Math.PI) {
              planetElement.style.zIndex = 4;
            } else {
              planetElement.style.zIndex = -1;
            }
          }
        }
      });
    }, 10);

    return intervalId;
}

export default rotate;
