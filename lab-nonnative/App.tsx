import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadScreen from './Screens/ReadScreen';
import AddScreen from './Screens/AddScreen';
import DeleteScreen from './Screens/DeleteScreen';
import UpdateScreen from './Screens/UpdateScreen';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ReadAll"
          component={ReadScreen}
          options={{title: 'All Doogs'}}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{title: 'Add dog'}}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteScreen}
          options={{title: 'Delete dog'}}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={{title: 'Update dog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
