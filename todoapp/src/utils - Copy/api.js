import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Define the key to store tasks in AsyncStorage
const TASKS_STORAGE_KEY = 'tasks';

// Create a function to save tasks to local storage
const saveTasksToStorage = async (tasks) => {
  try {
    // Convert tasks to a JSON string and save them to AsyncStorage
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    // Handle errors
    console.error('Error saving tasks to storage:', error);
  }
};

// Create a function to retrieve tasks from local storage
const retrieveTasksFromStorage = async () => {
  try {
    // Retrieve tasks from AsyncStorage and parse the JSON string
    const tasksJSON = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    if (tasksJSON) {
      return JSON.parse(tasksJSON);
    } else {
      return []; // Return an empty array if no tasks are found
    }
  } catch (error) {
    // Handle errors
    console.error('Error retrieving tasks from storage:', error);
    throw new Error('Error retrieving tasks');
  }
};

export { saveTasksToStorage, retrieveTasksFromStorage };
