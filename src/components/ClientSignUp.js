import React, { useState } from "react";
import Auth from "../modules/authentication";

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

const ClientSignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [company, setCompany] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");

  const auth = new Auth({ host: "http://localhost:3000/api/" });

  const signUpHandler = async () => {
    try {
      let response = await auth.signUp({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        company_name: company,
        company_url: companyUrl,
        role: "client",
      });
      props.navigation.navigate("clientPage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(text) => setEmail(text)} />
          </Item>

          <Item floatingLabel last>
            <Label>Password</Label>
            <Input onChangeText={(text) => setPassword(text)} secureTextEntry />
          </Item>

          <Item floatingLabel last>
            <Label>Password Confirmation</Label>
            <Input
              onChangeText={(text) => setPasswordConfirmation(text)}
              secureTextEntry
            />
          </Item>

          <Item floatingLabel last>
            <Label>Company Name</Label>
            <Input onChangeText={(text) => setCompany(text)} />
          </Item>

          <Item floatingLabel last>
            <Label>Company URL</Label>
            <Input onChangeText={(text) => setCompanyUrl(text)} />
          </Item>
        </Form>
      </Content>
      <Button block onPress={() => signUpHandler()}>
        <Text>Submit</Text>
      </Button>
    </Container>
  );
};

export default ClientSignUp;
