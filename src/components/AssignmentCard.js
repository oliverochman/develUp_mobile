import React from "react";
import { StyleSheet } from "react-native";
import { Card, CardItem, Text, Icon, Left, Body, Badge } from "native-base";

const AssignmentCard = ({ assignment }) => {
  return (
    <Card>
      <CardItem header bordered>
        <Left>
          <Icon name="laptop" />
          <Body>
            <Text>{assignment.title}</Text>
            <Text note>$ {assignment.budget}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem footer bordered style={styles.container}>
        <Left>
          <Text note style={styles.container2}>
            Points:
          </Text>
          <Badge primary>
            <Text>{assignment.points}</Text>
          </Badge>
        </Left>
        <Body>
          <Text note style={styles.cardSkills}>
            Skills: {assignment.skills.map((word) => word).join(" ")}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default AssignmentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A6572",
  },
  cardSkills: {
    color: "#ffff",
  },
});
