import * as React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator()

function MainTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Osnovno" component={MainScreen} options={{ tabBarIcon: "information" }} />
            <Tab.Screen name="Postavke" component={SettingsScreen} options={{ tabBarIcon: "cog" }} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;