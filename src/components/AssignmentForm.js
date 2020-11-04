import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Body,
  CheckBox,
} from "native-base";

const AssignmentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState("");
  const [ruby, setRuby] = useState(false);
  const [angular, setAngular] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState([]);

  // const selectedSkills = []

  /*   const [skills, setSkills] = useState([]); */
  /* const skillsHandler = () => {}; */

  return (
    <Container>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label style={styles.label}>Assignment</Label>
            <Input
              onChangeText={(text) => setTitle(text)}
              placeholder="Titel"
              style={styles.input}
            />
          </Item>

          <Item fixedLabel>
            <Textarea
              rowSpan={5}
              floated
              placeholder="Short description of your assignment"
              onChangeText={(text) => setDescription(text)}
            />

            <Input placeholder="" />
          </Item>

          <Item fixedLabel>
            <Label style={styles.label}>Timeframe</Label>
            <Input
              onChangeText={(text) => setTimeframe(text)}
              placeholder="days"
            />
          </Item>

          <Item style={styles.checkbox}>
            <Label style={styles.label}>Skills</Label>
          </Item>
          <Item style={styles.checkbox}>
            <CheckBox
              disabled={false}
              checked={angular}
              onPress={() => {
                setAngular(!angular);
                // {skills === true && setSelectedSkills(...selectedSkills.push("Ruby"))}
              }}
            />
            <Body>
              <Text>Angular</Text>
            </Body>
          </Item>

          <Item style={styles.checkbox}>
            <CheckBox
              disabled={false}
              checked={ruby}
              onPress={() => {
                setRuby(!ruby);
                // {skills === true && setSelectedSkills(...selectedSkills.push("Ruby"))}
              }}
            />
            <Body>
              <Text>Ruby</Text>
            </Body>
            <CheckBox disabled={false} value={false} />
            <Body>
              <Text>HTML-CSS</Text>
            </Body>
          </Item>

          <Item style={styles.checkbox}>
            <CheckBox disabled={false} value={false} />
            <Body>
              <Text>Node JS</Text>
            </Body>
            <CheckBox disabled={false} value={false} />
            <Body>
              <Text>Fullstack</Text>
            </Body>
          </Item>

          <Item style={styles.checkbox}>
            <CheckBox disabled={false} value={false} />
            <Body>
              <Text>React</Text>
            </Body>

            <CheckBox disabled={false} value={false} />
            <Body>
              <Text>React Native</Text>
            </Body>
          </Item>

          {/* <Item floatingLabel last>
          <Label style={styles.label}>SKILLS CHECKBOX</Label>
          <Input
            onChangeText={(text) => setPasswordConfirmation(text)}
            
          />
        </Item> */}

          <Item fixedLabel last>
            <Label style={styles.label}>Budget</Label>
            <Input onChangeText={(text) => setBudget(text)} placeholder="$" />
          </Item>
        </Form>
      </Content>
      <Button block onPress={() => signUpHandler()}>
        <Text>Publish</Text>
      </Button>
    </Container>
  );
};

export default AssignmentForm;

const styles = StyleSheet.create({
  label: {
    color: "blue",
  },
  checkbox: {
    height: 60,
  },
});
