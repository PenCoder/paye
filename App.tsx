import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


// Screens
import {
    SignUp,
    Scan,
    Categories,
    Payment,
    SignIn,
    AccountForm,
    Account,
    Accounts,
    Transaction,
    Authenticate,
    PINAuth,
} from './src/screens';
import HomeDrawer from './src/navigation/homedrawer';

// Custom Theme
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

// Stack Object
const Stack = createStackNavigator();


function App(): React.JSX.Element {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* To Sign In Screen */}
                <Stack.Screen name="SignIn" component={SignIn} />
                {/* To Authentication Screen */}
                <Stack.Screen name="Authenticate" component={Authenticate} />
                {/* To Sign Up Screen */}
                <Stack.Screen name="SignUp" component={SignUp} />
                {/* To Home Screen */}
                <Stack.Screen name="Main" component={HomeDrawer} />
                {/* To Scan Screen */}
                <Stack.Screen name="Scan" component={Scan} />
                {/* To Accessories Screen */}
                <Stack.Screen name="Categories" component={Categories} />
                {/* To Payment Screen */}
                <Stack.Screen name="Payment" component={Payment} />
                {/* To Accounts Screen */}
                <Stack.Screen name="Accounts" component={Accounts} />
                {/* To Account Screen */}
                <Stack.Screen name="Account" component={Account} />
                {/* To Account Form Screen */}
                <Stack.Screen name="AccountForm" component={AccountForm} />
                {/* To Transactions Screen */}
                <Stack.Screen name="Transaction" component={Transaction} />
                {/* To PIN Code Screen */}
                <Stack.Screen name="PINAuth" component={PINAuth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
