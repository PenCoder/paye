import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home, Scan, Transactions, Settings } from '../screens';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ focused }) => {

    return (

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
    )

}

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'slide',
                headerShown: false,
                drawerStyle: {
                    backgroundColor: COLORS.bg1,
                    paddingTop: SIZES.padding * 8,
                    paddingLeft: SIZES.padding * 4
                },
                drawerLabelStyle: {
                    color: COLORS.text_sec,
                    ...FONTS.body3
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                ...styles.shadow5
                            }}
                        >
                            <Image
                                source={icons.more}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.text_sec : COLORS.text_pri
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: SIZES.padding * 4,
                                    color: focused ? COLORS.text_sec : COLORS.text_pri,
                                    ...FONTS.body4,
                                }}>HOME</Text>
                        </View>
                    ),

                    drawerItemStyle: {
                        backgroundColor: COLORS.transparent,
                        marginVertical: SIZES.padding * 2
                    },
                }}
            />
            <Drawer.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    drawerLabel: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                // alignItems: 'center',
                                ...styles.shadow5
                            }}
                        >
                            <Image
                                source={icons.wallet}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.text_sec : COLORS.text_pri
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: SIZES.padding * 3,
                                    color: focused ? COLORS.text_sec : COLORS.text_pri,
                                    ...FONTS.body4,
                                }}>TRANSACTIONS</Text>
                        </View>
                    ),

                    drawerItemStyle: {
                        backgroundColor: COLORS.transparent,
                        marginVertical: SIZES.padding * 2
                    },
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={({ focused }) => ({
                    drawerLabel: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                ...styles.shadow5
                            }}
                        >
                            <Image
                                source={icons.tool}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.text_sec : COLORS.text_pri
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: SIZES.padding * 4,
                                    color: focused ? COLORS.text_sec : COLORS.text_pri,
                                    ...FONTS.body4,
                                }}>SETTINGS</Text>
                        </View>
                    ),
                    drawerItemStyle: {
                        backgroundColor: COLORS.transparent,
                    },
                })}
            />
        </Drawer.Navigator >
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

export default HomeDrawer;