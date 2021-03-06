import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label } from "native-base";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBCD9llXR4aUxPOhBzzWgy3aIeeYlj9Zs4",
  authDomain: "react-native-project-e0a0c.firebaseapp.com",
  databaseURL: "https://react-native-project-e0a0c.firebaseio.com",
  projectId: "react-native-project-e0a0c",
  storageBucket: "",
  messagingSenderId: "163531414338",
  appId: "1:163531414338:web:d6d141a071b061dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
         alert(user.email);
      })
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  render() { 
    return (
      <Container  style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                autoCapitalize="none" 
                autoCorrect={false}
                onChangeText={email => this.setState({ email })} 
                />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button full rounded
              onPress={() => this.SignIn(this.state.email, this.state.password)}
            >
              <Text>SignIn</Text>
            </Button>
            <Button full rounded success 
              style={{ marginTop: 20 }}
              onPress={() => this.SignUp(this.state.email, this.state.password)}
              > 
              <Text>Signup</Text>
            </Button>
          </Form>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	//alignItems: 'center',
	justifyContent: 'center',
	},
});
