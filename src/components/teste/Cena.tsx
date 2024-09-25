import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import * as THREE from "three";

export default function Cena() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 1] }} className="w-full h-full">
        <Stars />
      </Canvas>
    </div>
  );
}

function Stars(props: React.ComponentProps<typeof Points>) {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState<Float32Array>(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (<></>
    /*<group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>*/
  );
}