import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Home,
    Scan,
    Accounts
} from '../screens';
import { COLORS, icons } from '../constants';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {
    let isSelected = accessibilityState.selected;
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.transparent }}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50,
                            backgroundColor: COLORS.primary,
                            top: -25,
                            ...styles.shadow5
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>

            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: COLORS.transparent
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.more}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.scan}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Users"
                component={Accounts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabButton {...props} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow5: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default HomeTabs;