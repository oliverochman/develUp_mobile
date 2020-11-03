import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ClientPage = (props) => {
  return (
    <View>
      <Text>Welcome to develUp!</Text>
      <Text>{props.route.params.customParameter}</Text>
    </View>
  );
};

export default ClientPage;

const styles = StyleSheet.create({});
