import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createNewTaskInStorage } from '../utils/api'; // Import the necessary function

const TaskCreateScreen = ({ navigation }) => {
  // Use state to capture and update the task name
  const [taskName, setTaskName] = useState('');

  // Create a function to handle task creation
  const handleCreateTask = async () => {
    try {
      // Create a new task with the provided name and any other necessary data
      await createNewTaskInStorage(taskName);
      // After creating the task, you can navigate to the task list or perform other actions
      navigation.navigate('Home');
    } catch (error) {
      // Handle errors
      console.error('Error creating task:', error);
    }
  };

  return (
    <View>
      <Text>Create Task</Text>
      {/* Add an input field for the task name */}
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      {/* Add a button to create the task and link it to the handleCreateTask function */}
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default TaskCreateScreen;
