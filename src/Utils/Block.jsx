import React from "react";
import { useBox } from "@react-three/cannon";
import { RP, RP1 } from "../functions/parser";

function Block(props) {
  const {
    position = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    color = "#222",
  } = props;

  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation: RP(rotation),
    scale,
    material: { friction: 0, name: "slippery" },
  }));

  return (
    <mesh ref={ref} scale={[1, 1, 1]} position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

export default Block;
