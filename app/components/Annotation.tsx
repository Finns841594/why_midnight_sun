import { Center, Html, Text3D } from '@react-three/drei';

interface AnnotationProps {
  text: string;
}

const Annotation = ({ text }: AnnotationProps) => (
  <Center>
    <Text3D
      height={0.1}
      letterSpacing={-0.05}
      size={0.5}
      font="/Inter_Bold.json"
    >
      {text}
      <meshStandardMaterial color="white" />
    </Text3D>
  </Center>
);

export default Annotation;
