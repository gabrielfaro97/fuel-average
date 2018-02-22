import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { InputData, Form } from "@faicon/native-form";
import { Container, Content, Text, View, Button, Icon } from "native-base";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    formData: { dado1: null, dado2: null, dado3: null }
  };

  render() {
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
          />

          <Content contentContainerStyle={styles.contentContainer}>
            <Form
              ref={me => (this.form = me)}
              dataProvider={this.state.formData}
            >
              <InputData label="Dado 1" dataField="dado1" />
              <InputData label="Dado 2" dataField="dado2" />
              <InputData label="Dado 3" dataField="dado3" />
            </Form>
          </Content>

          <Button
            style={{
              borderTopWidth: 0.5,
              borderTopColor: "#259285",
              marginBottom: Platform.OS === "ios" ? 20 : 0
            }}
            full
            primary
            transparent
            onPress={() => alert("BU")}
          >
            <Text style={{ fontSize: 17 }}>Salvar a porra toda</Text>
          </Button>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  contentContainer: {
    paddingTop: 30
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  logo: {
    alignSelf:'center',
    marginTop: 30,
    height: 125,
    width: 125
  }
});
