import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import DarkVeil from './DarkVeil';

const dominoRows = 3;
const dominoCols = 8;
const dominoWidth = 3.5;
const dominoHeight = 10;
const dominoDepth = 0.7;
const dominoSpacingX = 6;
const dominoSpacingY = 14;
const fallTriggerScrollY = 0.15; // Start falling when About section comes into view

function Domino({ row, col, scrollY }: { row: number; col: number; scrollY: number }) {
  const ref = useRef<any>();
  useFrame(() => {
    // All dominos fall forward
    const direction = 1;
    // Staggered trigger for each domino (row-major order)
    const index = row * dominoCols + col;
    const trigger = fallTriggerScrollY + index * 0.04;
    const isEnd = scrollY >= 1;
    if (isEnd) {
      ref.current.rotation.z = direction * Math.PI / 2;
    } else if (scrollY > trigger) {
      ref.current.rotation.z = Math.min((scrollY - trigger) * 5, Math.PI / 2) * direction;
    } else {
      ref.current.rotation.z = 0;
    }
  });
  // Grid positioning
  const x = -((dominoCols - 1) * dominoSpacingX) / 2 + col * dominoSpacingX;
  const y = ((dominoRows - 1) * dominoSpacingY) / 2 - row * dominoSpacingY;
  return (
    <group ref={ref} position={[x, y, 0]}>
      <mesh>
        <boxGeometry args={[dominoWidth, dominoHeight, dominoDepth]} />
        <meshStandardMaterial color="#e5e5e5" />
      </mesh>
    </group>
  );
}

export default function DominoBackground3D() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      // Normalize scroll position (0 to 1)
      const y = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', inset: 0, zIndex: 0 }}>
      <DarkVeil />
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {Array.from({ length: dominoRows }).map((_, row) =>
          Array.from({ length: dominoCols }).map((_, col) => (
            <Domino key={`${row}-${col}`} row={row} col={col} scrollY={scrollY} />
          ))
        )}
      </Canvas>
      {/* Matte overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.0)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
    </div>
  );
}
