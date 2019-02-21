import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  StyleSheet
} from "react-native";
import { Text } from "react-native-elements";
import { View } from "native-base";
import api from "../services/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      senha: ""
    };
  }

  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    var value = await AsyncStorage.getItem("email");
    if (value !== null) {
      this.props.navigation.navigate("Profile");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>LOGIN</Text>

          <TextInput
            onChangeText={email => this.setState({ email })}
            style={styles.textInput}
            placeholder="E-mail"
            underlineColorAndroid="transparent"
          />
          <TextInput
            onChangeText={senha => this.setState({ senha })}
            style={styles.textInput}
            placeholder="Senha"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
            <Text style={styles.textBtn}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.cadastrar}
            style={styles.btnCadastrar}
          >
            <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  login = async () => {
    try {
      const response = await api.get("empregador/buscar");
      alert(response.data);
    } catch (e) {
      alert(e.data);
    }
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2896d3",
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btnLogin: {
    alignSelf: "stretch",
    backgroundColor: "#01c853",
    padding: 20,
    alignItems: "center",
    marginBottom: 20
  },
  btnCadastrar: {
    alignSelf: "stretch",
    backgroundColor: "#FA8072",
    padding: 20,
    alignItems: "center"
  },
  textBtn: {
    color: "#fff"
  }
});
