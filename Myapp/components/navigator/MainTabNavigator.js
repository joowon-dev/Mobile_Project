import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FileUploadScreen from '../../screens/FileUploadScreen';
import FileStorageScreen from '../../screens/FileStorageScreen';
import UploadStackNavigator from './UploadStackNavigator';
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="File Upload" component={UploadStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="File Storage" component={FileStorageScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
