import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";


const AssignmentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <Container>
    <Content>
      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input onChangeText={(text) => setTitle(text)} />
        </Item>

        <Item floatingLabel last>
          <Label>Description</Label>
          <Input onChangeText={(text) => setDescription(text)}  />
        </Item>

        <Item floatingLabel last>
          <Label>Timeframe</Label>
          <Input
            onChangeText={(text) => setTimeframe(text)}
            
          />
        </Item>

        {/* <Item floatingLabel last>
          <Label>SKILLS CHECKBOX</Label>
          <Input
            onChangeText={(text) => setPasswordConfirmation(text)}
            
          />
        </Item> */}

        <Item floatingLabel last>
          <Label>Budget</Label>
          <Input onChangeText={(text) => setBudget(text)} />
        </Item>

      </Form>

    </Content>
    <Button block onPress={() => signUpHandler()}>
      <Text>Submit</Text>
    </Button>
  </Container>
  )
}

export default AssignmentForm

const styles = StyleSheet.create({})
