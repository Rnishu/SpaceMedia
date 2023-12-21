import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
//forward ref to forward ref from current component to parent component
//used together with useImperativeHandle 
const CreateEntity = forwardRef((props, ref) => {
  const [gradient, setGradient] = useState({
    color1: makeColor(),
    color2: makeColor(),
  });
  const entityRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getEntityElement: () => entityRef.current,
  }));
  function makeColor() {
    let hue = 0;
    let saturation = 0;
    let lightness = 0;
    if((props.className).includes('sun')){
      //color constraints for sun
      hue = Math.floor(Math.random()*21)+40; //range 40-60
      saturation = Math.floor(Math.random()*21)+80; //range 80-100
      lightness = Math.floor(Math.random()*21)+40; //range 40-60
    }else{
      //color contraints for planet
      hue = Math.floor(Math.random()*360); //range 0-360
      saturation = Math.floor(Math.random()*50)+49; //range 50-100
      lightness = Math.floor(Math.random()*21)+40; //range 40-60
    }
    //return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  const dim = props.dim;
  const dimInteger = parseInt(dim.slice(0, -2));
  const blurRadius = (2 * dimInteger).toString() + "px";
  const style = {
    height: dim,
    width: dim,
    background: `linear-gradient(to right, ${gradient.color1}, ${gradient.color2})`,
    borderRadius: "100%",
    boxShadow: `0 0 ${blurRadius} ${gradient.color1}`,
  };
  console.log(props.className);
  console.log(style);
  const entity = (
    <div className={props.className} style={style} ref={entityRef}></div>
  );
  return entity;
});

export default CreateEntity;
