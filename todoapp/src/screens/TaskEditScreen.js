import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { fetchTaskFromStorage, updateTaskInStorage } from '../utils/api'; // Import the necessary functions

const TaskEditScreen = ({ navigation, route }) => {
  const { taskId } = route.params;

  // Use state to capture and update the task name
  const [taskName, setTaskName] = useState('');

  // Create a function to handle task editing
  const handleEditTask = async () => {
    try {
      // Fetch the existing task from local storage using the taskId
      const existingTask = await fetchTaskFromStorage(taskId);

      // Update the task name with the new name provided by the user
      existingTask.name = taskName;

      // Update the task in local storage
      await updateTaskInStorage(existingTask);

      // After editing the task, you can navigate to the task list or perform other actions
      navigation.navigate('Home');
    } catch (error) {
      // Handle errors
      console.error('Error editing task:', error);
    }
  };

  useEffect(() => {
    // Fetch the task details when the component mounts
    const fetchTaskDetails = async () => {
      try {
        // Fetch the existing task details using the taskId
        const existingTask = await fetchTaskFromStorage(taskId);
        setTaskName(existingTask.name);
      } catch (error) {
        // Handle errors
        console.error('Error fetching task details:', error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  return (
    <View>
      <Text>Edit Task</Text>
      {/* Pre-fill the input field with the current task name */}
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      {/* Add a button to save the edited task and link it to the handleEditTask function */}
      <Button title="Save Task" onPress={handleEditTask} />
    </View>
  );
};

export default TaskEditScreen;
