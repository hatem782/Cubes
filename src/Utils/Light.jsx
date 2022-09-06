import React from "react";

function Light() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[-200, 200, 200]} angle={0.2} />
      <spotLight position={[-2, 2, -2]} angle={0.6} />
    </>
  );
}

export default Light;
