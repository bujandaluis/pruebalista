import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/presentation/screen/home/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { DetailScreen } from './src/presentation/screen/detail/Detail';
import { MobileModel } from './src/models/mobileModel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen:undefined,
  DetailScreen:MobileModel,
}

export default function App() {

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: true, title: ''}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

