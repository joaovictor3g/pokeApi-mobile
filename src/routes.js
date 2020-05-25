import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import InitialScreen from './pages/InitialScreen';
import Details from './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Pokemons" component={InitialScreen}/>
                <AppStack.Screen name="details" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

