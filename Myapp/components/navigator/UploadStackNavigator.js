import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Import the screens:
import FileUploadScreen from '../../screens/FileUploadScreen'; 
import PhotoUploadScreen from '../../screens/PhotoUploadScreen'; 
import VideoUploadScreen from '../../screens/VideoUploadScreen';
const Stack = createStackNavigator();

function UploadStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="FileUpload">
      <Stack.Screen name="FileUpload" component={FileUploadScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ChoosePhoto" component={PhotoUploadScreen} />
      <Stack.Screen name="ChooseVideo" component={VideoUploadScreen} />
    </Stack.Navigator>
  );
}

export default UploadStackNavigator;