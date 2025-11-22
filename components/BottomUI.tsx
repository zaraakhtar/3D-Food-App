import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomUI = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <TouchableOpacity>
        <Button title="Press Me" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomUI;

const styles = StyleSheet.create({});
