"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Points as PointsType } from "three";

export const StarBackground = () => {
  const ref = useRef<PointsType>(null);

  // ✅ Typed and stable: Generate 5000 random points in a sphere
  const [sphere] = useState<Float32Array>(() => {
    const buffer = new Float32Array(5000 * 3);
    random.inSphere(buffer, { radius: 1.2 });
    return buffer;
  });

  // ✅ Rotate the points gently using the frame loop
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere} // ✅ Float32Array accepted
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
