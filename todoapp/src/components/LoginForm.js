import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = ({ onLogin }) => {
  // Use state to capture email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Create a function to handle login
  const handleLogin = () => {
    // Call the `onLogin` function with the entered email and password
    onLogin(email, password);
  };

  return (
    <View>
      <Text>Login Page</Text>
      {/* Input field for email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {/* Input field for password (secureTextEntry hides the text) */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* Button for login, connected to the handleLogin function */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
