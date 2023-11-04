import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskClick, onDeleteTask }) => {
  // Group tasks by status
  const groupedTasks = groupTasksByStatus(tasks);

  return (
    <ScrollView>
      {Object.keys(groupedTasks).map((status) => (
        <View key={status}>
          <Text>{status}</Text>
          {groupedTasks[status].map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskClick={onTaskClick}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Helper function to group tasks by status
const groupTasksByStatus = (tasks) => {
  const groupedTasks = {};
  tasks.forEach((task) => {
    const { status } = task;
    if (!groupedTasks[status]) {
      groupedTasks[status] = [];
    }
    groupedTasks[status].push(task);
  });
  return groupedTasks;
};

export default TaskList;
