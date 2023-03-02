import React, { useState, useEffect } from 'react';
import { View, Text,Button } from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
  // Set an initializing state whilst Firebase connects
 const signUp=()=>{
  auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
 }
  return (
    <View>
      <Text>Welcome</Text>
      <Button title="signUp" onPress={signUp} />
    </View>
  );
}

export default App