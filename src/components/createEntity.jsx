import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
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
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
    <div class={props.className} style={style} ref={entityRef}></div>
  );
  return entity;
});

export default CreateEntity;
