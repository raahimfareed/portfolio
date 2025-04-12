"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function SpinningCatModel() {
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF("/models/cat/scene.gltf");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.1;
    }
  });

  return <group ref={ref} scale={[5, 5, 5]} position={[0, 0, 0]}>
    <primitive object={gltf.scene} />
  </group>
}

export const Uiiai = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <ambientLight />
      <directionalLight position={[0, 0, 0]} />
      <Suspense fallback={null}>
        <SpinningCatModel />
      </Suspense>
    </Canvas>
  );
}
