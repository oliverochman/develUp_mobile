import React from "react";
import { View, StyleSheet, FlatList} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Badge,
} from "native-base";

const AssignmentCard = ({ assignment }) => {
  return (
    <Card >
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
        <Left >
          <Text note style={styles.container2}>Points: </Text>
          <Badge primary>
            <Text>{assignment.points}</Text>
          </Badge>
          <Text note style={styles.container2}> Skills: {assignment.skills.map((word) => word).join(" ")}</Text>
        </Left>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A6572",
  },
  container2: {
    color: "#ffff"

  }
});

export default AssignmentCard;
