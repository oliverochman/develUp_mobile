import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AssignmentsIndex = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to DevelUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AssignmentsIndex;
