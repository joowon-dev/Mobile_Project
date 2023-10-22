/* 
 App
 2023-09-04//고주원//Login으로 연결
 2023-09-06//이상용//Main으로 연결
 */
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 //import Main_Drawer_Navigator from './navigator/Main_Drawer_Navigator'
 //
 //import DeviceScreen from './screens/DeviceScreen';
 //
 import { NativeBaseProvider } from 'native-base';
 import StartScreen from './screens/StartScreen';
 import MainTabNavigator from './components/navigator/MainTabNavigator';
 import { ServerAddressProvider } from './ServerAddressContext';
 const Stack = createStackNavigator();
 
 
 
 function App() {
   return (
    <ServerAddressProvider>
     <NativeBaseProvider>
     <NavigationContainer>
 
       <Stack.Navigator initialRouteName="Start" >
 
         <Stack.Screen name="Main" component={MainTabNavigator}  options={{headerShown: false}}/>
         <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
        
         
       </Stack.Navigator>
     </NavigationContainer>
     </NativeBaseProvider>
     </ServerAddressProvider>
   );
 }
 
 export default App;