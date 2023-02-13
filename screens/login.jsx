import React from "react";
import { View } from "react-native";
import { loginStyles } from "../assets/styles/global";
import { TextInput } from "react-native-paper";

const Login = () => {
  return (
    <View style={loginStyles}>
      <TextInput mode="outlined" label="Email" />
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
    </View>
  );
};

export default Login;
