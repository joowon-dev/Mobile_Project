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
      <Stack.Screen 
        name="FileUpload" 
        component={FileUploadScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ChoosePhoto" 
        component={PhotoUploadScreen} 
        options={{
          title: 'Photo Upload',
          headerBackTitleVisible: false,
          headerStyle: { 
            backgroundColor: '#1E293B'
          },
          headerTintColor: '#ffffff', // 글씨와 아이콘 색상을 하얀색으로 변경
          headerShadowVisible: false, // 하단 그림자 제거
        }}
      />
      <Stack.Screen 
        name="ChooseVideo" 
        component={VideoUploadScreen} 
        options={{
          headerBackTitleVisible: false,
          headerStyle: { 
            backgroundColor: '#1E293B'
          },
          headerTintColor: '#ffffff', // 글씨와 아이콘 색상을 하얀색으로 변경
          headerShadowVisible: false, // 하단 그림자 제거
        }}
      />
    </Stack.Navigator>
  );
}

export default UploadStackNavigator;
