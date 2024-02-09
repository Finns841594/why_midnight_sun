import { Center, Text3D } from '@react-three/drei';
import { useRef, useState } from 'react';

interface AnnotationProps {
  text: string;
}

const Annotation = ({ text }: AnnotationProps) => {
  const textRef = useRef<THREE.Mesh>(null!);
  const [isNight, setIsNight] = useState(false);
  // need to set isNight to true when textRef is under horizon
  return (
    <Center>
      <Text3D
        ref={textRef}
        height={0.1}
        letterSpacing={-0.05}
        size={0.4}
        font="/Inter_Bold.json"
      >
        {text}
        <meshStandardMaterial color={isNight ? '#4469ff' : '#ffca44'} />
        {/* should pick two prettier color */}
      </Text3D>
    </Center>
  );
};

export default Annotation;
