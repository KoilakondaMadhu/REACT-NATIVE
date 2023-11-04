import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchUserDetailsFromAPI, clearTokens } from '../utils/api'; // Import the necessary functions

const ProfileScreen = ({ navigation, access_token, onLogout }) => {
  // Use state to store user details
  const [userDetails, setUserDetails] = useState({});

  // Create a function to fetch user details using the access_token
  const fetchUserDetails = async () => {
    try {
      // Fetch user details from the API using access_token
      const userDetailsData = await fetchUserDetailsFromAPI(access_token);
      // Update the userDetails state with the retrieved data
      setUserDetails(userDetailsData);
    } catch (error) {
      // Handle errors
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    // Call the fetchUserDetails function when the component mounts
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    // Clear tokens and navigate to the login screen
    clearTokens(); // You need to implement a function to clear the tokens in your `api.js`
    onLogout();
  };

  return (
    <View>
      <Text>Profile Page</Text>
      <Text>Name: {userDetails.name}</Text>
      {/* Display user details such as name, email, etc. */}
      <Text>Email: {userDetails.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
