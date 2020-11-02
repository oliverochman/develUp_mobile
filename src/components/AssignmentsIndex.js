import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const AssignmentsIndex = () => {
	const [assignments, setAssignments ] = useState ([])

	useEffect(() => {
		const getAssignmentsIndex = async () => {
			const response = await Assignments.index()
			setAssignments(response)
		}
		getAssignmentsIndex();
	}, [])

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
