import * as React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MainScreen from '../screens/MainScreen';

function MainTabNavigator() {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Osnovno" component={MainScreen} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;