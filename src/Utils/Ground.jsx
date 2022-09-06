import React, { useEffect, useState } from "react";
import { GradientTexture } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

function Ground(props) {
  const { scale = [1, 1, 1], devisions = 10 } = props;
  const [lines, setLines] = useState([]);
  const [colons, setColons] = useState([]);
  const [ref, api] = usePlane(() => ({
    material: { friction: 0, name: "slippery" },
    rotation: [-Math.PI / 2, 0, Math.PI],
  }));

  useEffect(() => {
    const tab1 = [];
    for (let i = 0; i <= scale[0] / devisions; i++) {
      tab1.push(0);
    }
    setLines([...tab1]);
    const tab2 = [];
    for (let i = 0; i <= scale[2] / devisions; i++) {
      tab2.push(0);
    }
    setColons([...tab2]);
  }, [devisions]);

  const RP = (val) => {
    return Math.PI * (val / 180);
  };

  return (
    <group position={[0, 0, 0]} scale={[50, 1, 50]} ref={ref}>
      <mesh>
        <planeBufferGeometry args={[1, scale[2]]} attach="geometry" />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={["#450d49", "#0b4679"]}
            size={1000}
          />
        </meshBasicMaterial>
      </mesh>
      <group>
        {lines.map((ab, index) => {
          return (
            <mesh
              key={index}
              scale={[0.001, scale[0], 0.001]}
              position={[index / (scale[0] / devisions) - 0.5 + 0.01, 0.04, 0]}
            >
              <boxBufferGeometry attach="geometry" />
              <meshBasicMaterial color="#fff" opacity={0.1} transparent />
            </mesh>
          );
        })}
        {lines.map((ab, index) => {
          return (
            <mesh
              key={index}
              scale={[1, 0.001, 0.001]}
              position={[0.001, index * devisions - scale[0] / 2, 0.001]}
            >
              <boxBufferGeometry attach="geometry" />
              <meshBasicMaterial color="#fff" opacity={0.1} transparent />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export default Ground;

/*

{lines.map((ab, index) => {
          return (
            <mesh
              key={index}
              scale={[1, 1, 0.001]}
              position={[0, 0.01, index / (scale[0] / devisions) - 0.5 + 0.01]}
            >
              <boxBufferGeometry attach="geometry" />
              <meshBasicMaterial color="#f00" opacity={1} transparent />
            </mesh>
          );
        })}

*/
