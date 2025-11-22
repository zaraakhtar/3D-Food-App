import BottomUI from "@/components/BottomUI";
import { Canvas } from "@react-three/fiber/native";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
          <color attach="background" args={["#512DA8"]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="hotpink" />
          </mesh>
        </Canvas>
        <BottomUI />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
