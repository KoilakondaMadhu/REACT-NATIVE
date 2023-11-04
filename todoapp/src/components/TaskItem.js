import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskItem = ({ task, onTaskClick, onDeleteTask }) => {
  const { id, name, status, isCompleted } = task;

  const handleTaskClick = () => {
    onTaskClick(id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>Status: {status}</Text>
      {isCompleted && <Text>Completed</Text>}
      <Button title="Edit" onPress={handleTaskClick} />
      <Button title="Delete" onPress={handleDeleteClick} />
    </View>
  );
};

export default TaskItem;
