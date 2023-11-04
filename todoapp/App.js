import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TaskCreationScreen from './src/screens/TaskCreationScreen';
import TaskEditScreen from './src/screens/TaskEditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CreateTask" component={TaskCreationScreen} />
        <Stack.Screen name="EditTask" component={TaskEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
