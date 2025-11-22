import { Canvas } from '@react-three/fiber/native';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from './../../global.css';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2, 5, 5], fov: 30}}>
        <color attach="background" args={["#512DA8"]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
         
      </Canvas>
    </View>
  );
}



