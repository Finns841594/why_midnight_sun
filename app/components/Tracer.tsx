import { Line } from '@react-three/drei';
import React, { useState } from 'react';
import { Vector3 } from 'three';

interface TracerProps {
  position: Vector3[];
}

function Tracer({ position }: TracerProps) {
  const [tracePositions, setTracePositions] = useState<Vector3[]>([]);
  return (
    <div>
      {tracePositions.length > 1 && (
        <Line
          points={tracePositions} // Array of Vector3
          color="white" // Line color
          lineWidth={1} // Line width
        />
      )}
    </div>
  );
}

export default Tracer;
