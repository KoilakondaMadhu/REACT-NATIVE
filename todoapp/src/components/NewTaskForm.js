import React, { useState } from 'react';
import { View, Text, Button, TextInput, Picker } from 'react-native';

const NewTaskForm = ({ onTaskCreate }) => {
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('TO DO');

  const handleCreateTask = () => {
    // Create a new task object with the provided details
    const newTask = {
      name: taskName,
      status: taskStatus,
      isCompleted: false, // A new task is initially not completed
    };

    // Call the parent component's function to create the task
    onTaskCreate(newTask);

    // Clear the input fields after creating the task
    setTaskName('');
    setTaskStatus('TO DO');
  };

  return (
    <View>
      <Text>Create New Task</Text>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Text>Status:</Text>
      <Picker
        selectedValue={taskStatus}
        onValueChange={(itemValue, itemIndex) => setTaskStatus(itemValue)}
      >
        <Picker.Item label="TO DO" value="TO DO" />
        <Picker.Item label="IN PROGRESS" value="IN PROGRESS" />
        <Picker.Item label="COMPLETED" value="COMPLETED" />
      </Picker>
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default NewTaskForm;
