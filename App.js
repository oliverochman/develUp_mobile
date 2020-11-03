import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AssignmentsIndex from "./src/components/AssignmentsIndex";

const Stack = createStackNavigator(); 


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={myOptions}>
        <Stack.Screen name="develUp" component={AssignmentsIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const myOptions = {
  headerStyle: { backgroundColor: "#F9AA33" },
  title: "develUp",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25
  },
  headerTintColor: "white",
};