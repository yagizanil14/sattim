import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Signin, Signup, Dummy } from './pages'

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Dummy" component={Dummy} options={{ headerShown: false, gestureEnabled: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;