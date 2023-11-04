import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Picker } from 'react-native';

const TaskEditForm = ({ task, onTaskEdit }) => {
  const [taskName, setTaskName] = useState(task.name);
  const [taskStatus, setTaskStatus] = useState(task.status);

  const handleEditTask = () => {
    // Create an updated task object with the edited details
    const updatedTask = {
      ...task,
      name: taskName,
      status: taskStatus,
    };

    // Call the parent component's function to edit the task
    onTaskEdit(updatedTask);
  };

  useEffect(() => {
    // Update the input fields with the current task details when the component mounts
    setTaskName(task.name);
    setTaskStatus(task.status);
  }, [task]);

  return (
    <View>
      <Text>Edit Task</Text>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Text>Status:</Text>
      <Picker
        selectedValue={taskStatus}
        onValueChange={(itemValue) => setTaskStatus(itemValue)}
      >
        <Picker.Item label="TO DO" value="TO DO" />
        <Picker.Item label="IN PROGRESS" value="IN PROGRESS" />
        <Picker.Item label="COMPLETED" value="COMPLETED" />
      </Picker>
      <Button title="Save Task" onPress={handleEditTask} />
    </View>
  );
};

export default TaskEditForm;
