import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { retrieveTasksFromStorage } from '../utils/api'; // Import the necessary function

const HomeScreen = ({ navigation, access_token }) => {
  // Initialize tasks state using useState
  const [tasks, setTasks] = useState([]);

  // Use native APIs like AsyncStorage to manage data persistence
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Fetch tasks from local storage when the component mounts
        const storedTasks = await retrieveTasksFromStorage();
        setTasks(storedTasks);
      } catch (error) {
        // Handle errors
        console.error('Error fetching tasks:', error);
      }
    };

    // Call the fetchTasks function when the component mounts
    fetchTasks();
  }, []);

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          {/* Display a message if the task is completed */
          task.isCompleted && <Text>Task is Completed</Text>}
          {/* Add a button to mark the task as completed and link it to the handleCompleteTask function */}
          <Button title="Complete Task" onPress={() => handleCompleteTask(task.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
