import React from "react";
import { KeyboardAvoidingView, StyleSheet, Platform, Text, View } from 'react-native';
import { Provider } from "react-redux"
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <Provider store={store} >
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.os === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen' component={HomeScreen} options={{
                headerShown: false,
              }}
              />
              <Stack.Screen
              name='MapScreen' component={MapScreen} options={{
                headerShown: false,
              }}
              />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});