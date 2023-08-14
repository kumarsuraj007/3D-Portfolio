import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.1}
      penumbra={0.12}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />

      <primitive object={computer.scene} 
      scale={isMobile ? 0.4 : 0.60}
      position={isMobile ? [0, -1.8, -0.6] :[0, -3.5, -1.2]}
      rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches);

    const mediaQueryChangeHandler = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener('change', mediaQueryChangeHandler);
    }
  }, [])
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          manPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
