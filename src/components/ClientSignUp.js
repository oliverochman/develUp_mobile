import React from "react";
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from "native-base";

const ClientSignUp = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>

          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>

          <Item floatingLabel last>
            <Label>Password Confirmation</Label>
            <Input secureTextEntry />
          </Item>

          <Item floatingLabel last>
            <Label>Company Name</Label>
            <Input />
          </Item>

          <Item floatingLabel last>
            <Label>Company URL</Label>
            <Input />
          </Item>
        </Form>
      </Content>
      <Button block>
        <Text>Submit</Text>
      </Button>
    </Container>
  );
};

export default ClientSignUp;
