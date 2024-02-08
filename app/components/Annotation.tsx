import { Billboard, Text } from '@react-three/drei';

interface AnnotationProps {
  text: string;
}

const Annotation = ({ text, ...props }: AnnotationProps) => {
  console.log('text', text);

  return (
    <Text
      color="black" // Default
      anchorX="center" // Horizontal center alignment
      anchorY="middle" // Vertical center alignment
      position={[0, 0, 0]} // Position the text
    >
      Hello R3F
    </Text>
  );
};

export default Annotation;
