import React, { useEffect, useState } from "react";
import Player from "./Player";
import { useBox } from "@react-three/cannon";
import { RP, RP1 } from "../functions/parser";

function PlayerMove(props) {
  const {
    position = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
  } = props;

  const [ref, api] = useBox(() => ({
    position,
    rotation: RP(rotation),
    scale,
    // material: { friction: 0, name: "slippery" },
  }));

  // *********************** INITIALISATION *************************

  const [rot, setRot] = useState([0, 0, 0]);
  let pos = [0, 0.5, 0];
  let moving = false;

  useEffect(() => {
    setRot([...rotation]);
  }, [rotation]);

  const MoveXZ = ({ sigx = 1, sigz = 1 }) => {
    let divisions = 10;
    let speed = 300;
    let [x, y, z] = pos;

    console.log(pos);
    let steps = 0;
    moving = true;
    const intervalId = setInterval(() => {
      if (steps <= 0.9) {
        steps += 1 / divisions;
        api.position.set(x + steps * sigx, y, z + steps * sigz);
      } else {
        moving = false;
        pos = [Math.floor(x + sigx), y, Math.floor(z + sigz)];
        clearInterval(intervalId);
      }
    }, speed / divisions);
  };

  useEffect(() => {
    const onKeyDown = ({ key }) => {};
    const onKeyUp = ({ key }) => {
      if (!moving) {
        if (key === "ArrowUp" || key.toLowerCase() === "z") {
          setRot([0, 90, 0]);
          MoveXZ({ sigx: 1, sigz: 0 });
        } else if (key === "ArrowRight" || key.toLowerCase() === "d") {
          setRot([0, 0, 0]);
          MoveXZ({ sigx: 0, sigz: 1 });
        } else if (key === "ArrowDown" || key.toLowerCase() === "s") {
          setRot([0, 270, 0]);
          MoveXZ({ sigx: -1, sigz: 0 });
        } else if (key === "ArrowLeft" || key.toLowerCase() === "q") {
          setRot([0, 180, 0]);
          MoveXZ({ sigx: 0, sigz: -1 });
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  // *********************** apply physics *************************

  useEffect(() => {
    if (api) {
      api.rotation.set(0, RP1(rot[1]), 0);
    }
  }, [rot]);

  return (
    <Player
      position={position}
      scale={scale}
      rotation={rotation}
      reference={ref}
    />
  );
}

export default PlayerMove;
