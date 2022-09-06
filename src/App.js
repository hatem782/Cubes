import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Ground from "./Utils/Ground";
import Light from "./Utils/Light";
import PlayerMove from "./Models/PlayerMove";
import Block from "./Utils/Block";

function App() {
  const steps = 50; // the nubler of squares in field + vew range of camera
  return (
    <Canvas camera={{ fov: 10, position: [-steps, steps, steps] }}>
      <OrbitControls />
      <Light />

      <Physics>
        <Ground scale={[steps, 1, steps]} devisions={3} />
        <PlayerMove
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.5, 0]}
          rotation={[0, 90, 0]}
        />

        <mesh scale={[1, 1, 1]} position={[0, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial color="#f00" transparent opacity={0.2} />
        </mesh>

        <mesh scale={[1, 1, 1]} position={[1, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial color="#ff0" transparent opacity={0.2} />
        </mesh>

        <mesh scale={[1, 1, 1]} position={[2, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial color="#0f0" transparent opacity={0.2} />
        </mesh>

        <mesh scale={[1, 1, 1]} position={[3, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial color="#0ff" transparent opacity={0.2} />
        </mesh>

        <mesh scale={[1, 1, 1]} position={[4, 0.5, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshBasicMaterial color="#00f" transparent opacity={0.2} />
        </mesh>

        {/* <Block color="#f00" position={[3, 2, 3]} />
        <Block color="#0f0" position={[-3, 2, 3]} />
        <Block color="#0ff" position={[3, 2, -3]} />
        <Block color="#00f" position={[-3, 2, -3]} /> */}
      </Physics>
    </Canvas>
  );
}

export default App;
