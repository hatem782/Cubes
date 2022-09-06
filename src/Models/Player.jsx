import React from "react";
import { RP } from "../functions/parser";

const Player = (props) => {
  const {
    position = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    reference,
  } = props;

  // const powerTexture = useTexture(textureImg);

  return (
    <group
      ref={reference}
      rotation={RP(rotation)}
      // position={position}
      scale={scale}
    >
      {/* BigBody */}
      <mesh scale={[1.2, 0.6, 1.2]} position={[0, 0.3, -0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[1.2, 0.3, 1.2]} position={[0, -0.15, -0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#6d6d6d" />
      </mesh>
      <mesh scale={[1.2, 0.3, 1.2]} position={[0, -0.45, -0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#5b5b5b" />
      </mesh>

      {/* Ground Feets */}
      <mesh scale={[1.2, 0.3, 1.2]} position={[0, -0.75, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#080605" />
      </mesh>

      {/* Head */}
      <mesh scale={[0.5, 0.6, 0.4]} position={[0, 0.3, 0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[0.5, 0.3, 0.4]} position={[0, -0.15, 0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#6d6d6d" />
      </mesh>
      <mesh scale={[0.5, 0.3, 0.4]} position={[0, -0.45, 0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#5b5b5b" />
      </mesh>
      {/* Face */}
      <mesh scale={[0.5, 0.4, 0.4]} position={[0, 0.8, 0.4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#f00" emissive="#f00" />
      </mesh>

      {/* left hand */}
      <mesh scale={[0.4, 0.9, 1.6]} position={[0.8, -0.45, 0.2]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[0.4, 0.9, 0.4]} position={[0.4, -0.45, 0.8]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[0.45, 0.3, 1.7]} position={[0.825, -0.45, 0.2]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#f00" emissive="#f00" />
      </mesh>

      {/* right hand */}
      <mesh scale={[0.4, 0.9, 1.6]} position={[-0.8, -0.45, 0.2]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[0.4, 0.9, 0.4]} position={[-0.4, -0.45, 0.8]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#b5b5b5" />
      </mesh>
      <mesh scale={[0.45, 0.3, 1.7]} position={[-0.825, -0.45, 0.2]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#f00" emissive="#f00" />
      </mesh>
    </group>
  );
};

export default Player;
