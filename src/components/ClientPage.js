import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ClientPage = (props) => {
  return (
    <View>
      <Text style={styles.welcomeText}>
        {props.route.params.customParameter}
      </Text>
    </View>
  );
};

export default ClientPage;

const styles = StyleSheet.create({
  welcomeText: {
    margin: 5,
    color: "#0059b3",
    fontSize: 15,
  },
});
