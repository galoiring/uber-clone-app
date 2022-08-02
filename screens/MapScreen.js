import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import tw from "tailwind-react-native-classnames"
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                
                <View style={tw`h-1/2`}>
                    <Map/>
                </View>

                <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard} 
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard} 
                        options={{
                            headerShown: false,
                        }}
                    />
                    </Stack.Navigator>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default MapScreen

const styles = StyleSheet.create({})