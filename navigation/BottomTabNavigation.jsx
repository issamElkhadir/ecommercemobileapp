import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home , Profil , Search} from "../screens";
import {Ionicons} from "@expo/vector-icons"
import {COLORS} from "../constants/index";
const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel : false ,
    tabBarHideKeyboard : true ,
    headerShown : false,
    tabBarStyles : {
        position : "absolute",
        bottom : 0 ,
        right : 0 ,
        left : 0 ,
        elevation : 0 ,
        height : 70
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{ 
                tabBarIcon : ({focused}) => {
                    return <Ionicons name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            />;
                }
            }}
        />
        <Tab.Screen 
            name="Search" 
            component={Search}
            options={{ 
                tabBarIcon : ({focused}) => {
                    return <Ionicons name="search-sharp"
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            />;
                }
            }}
        />
        <Tab.Screen 
            name="Profil" 
            component={Profil}
            options={{ 
                tabBarIcon : ({focused}) => {
                    return <Ionicons name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                            />;
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation