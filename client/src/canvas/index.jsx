import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas>
      {/*eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <BackDrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
