import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from "react-native-elements"
import tw from "tailwind-react-native-classnames"
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from "@env"

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "afarsek 3 ashdod israel",
    },
    {
        id:"456",
        icon:"briefcase",
        location: "Work",
        destination: "London Eye, London, UK"
    },
];


const NavFavourites = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    var locationHome = null;
  return (
    <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height: 0.5} ]} /> )}
        
        renderItem={({item: {location, destination, icon}}) => (
            <TouchableOpacity 
            onPress={(data, details = null) => {

                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${GOOGLE_MAPS_APIKEY}&language=en`)
                .then((response) => response.json())
                .then((data) => {

                  locationHome = {  lat: data.results[0].geometry.location.lat,
                                    lng: data.results[0].geometry.location.lng
                                }
                            })
                
                dispatch(
                    setDestination({
                    location: locationHome,
                    description: destination,
                    }))
                navigation.navigate('RideOptionsCard')
                
            }}
            
            style={tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-400 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({})