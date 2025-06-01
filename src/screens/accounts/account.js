import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES, images } from '../../constants';
import { ListItem, Divider } from '../../components';
import styles from './styles';

const accounts = [
    { name: 'GT Bank', type: 'Bank Account', icon: 'bank' },
    { name: 'Vodafone Cash', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'MTN MoMo', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'Visa', type: 'Credit Card', icon: 'credit_card' },
    { name: 'GCB', type: 'Bank Account', icon: 'bank' }
]

const Account = (props, { navigation }) => {
    const { account } = props;
    // State Hooks
    const [phone, setPhone] = useState('');

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 3
                }}
            // onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.logo_tint
                    }}
                />
                <Text
                    style={{
                        marginLeft: SIZES.padding * 1.5,
                        color: COLORS.text_pri,
                        ...FONTS.h3
                    }}
                >
                    VODAFONE CASH
                </Text>
            </TouchableOpacity>
        )
    }
    function renderDetails() {
        return (
            <View style={{ marginTop: SIZES.padding * 3 }}>
                <View
                    style={{
                        margin: SIZES.padding * 2,
                    }}
                >

                    <View>
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h1 }}>₵ 1,000</Text>
                        <Text style={{ color: COLORS.text_sec, ...FONTS.body5 }}>ACCOUNT BALANCE</Text>
                    </View>

                </View>

                <View
                    style={{ margin: SIZES.padding * 2 }}
                >
                    <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>ACCOUNT DETAILS</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.bg_gd_top,
                            borderRadius: 30,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: SIZES.padding * 2
                        }}
                    >
                        <Image
                            source={icons.user}
                            style={{
                                height: '40%',
                                width: '40%',
                                tintColor: COLORS.logo_tint
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h4 }}>Kofi Appau</Text>
                        <Text style={{ color: COLORS.text_sec, ...FONTS.body5 }}>ACCOUNT NAME</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.bg_gd_top,
                            borderRadius: 30,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: SIZES.padding * 2
                        }}
                    >
                        <Image
                            source={icons.wallet}
                            style={{
                                height: '40%',
                                width: '40%',
                                tintColor: COLORS.logo_tint
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h4 }}>0206644084</Text>
                        <Text style={{ color: COLORS.text_sec, ...FONTS.body5 }}>ACCOUNT NUMBER</Text>
                    </View>
                </View>

            </View>
        )
    }
    function renderHistory() {
        return (
            <View>
                <View
                    style={{ margin: SIZES.padding * 2 }}
                >
                    <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>TRANSACTIONS</Text>
                </View>

                {[1, 2].map((item, index) =>
                    <TouchableOpacity
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 0.3,
                            borderRadius: 10,
                            borderColor: COLORS.border_color,
                            margin: SIZES.padding * 0.5,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: COLORS.bg_gd_top,
                                borderRadius: 30,
                                width: 50,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: SIZES.padding * 2
                            }}
                        >
                            <Image
                                source={icons.send}
                                style={{
                                    height: '40%',
                                    width: '40%',
                                    tintColor: COLORS.logo_tint
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>GH₵ 200</Text>
                            <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>2021-08-21 01:12:10</Text>
                        </View>
                    </TouchableOpacity>

                )}
            </View>
        )
    }
    function renderListHeader() {
        return (
            <View
                style={{
                    padding: SIZES.padding * 3,
                    marginBottom: SIZES.padding * 4,
                    backgroundColor: COLORS.bg_gd_down,
                    // borderTopLeftRadius: 10,
                    // borderTopRightRadius: 10,
                }}
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.text_pri,
                            ...FONTS.h1
                        }}
                    >₵505,800</Text>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>Ghana Cedis</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: SIZES.padding * 0.9,
                            marginTop: SIZES.padding * 1.5,
                            borderRadius: 5
                        }}
                        onPress={() => navigation.navigate('AccountForm')}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>+ Add Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    function renderGoButton() {
        return (
            <View style={{ margin: 2, marginHorizontal: SIZES.padding * 5 }}>
                <TouchableOpacity
                    style={{
                        ...styles.button
                    }}
                    onPress={() => navigation.navigate('Categories')}
                >
                    <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>GO</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /*
    * HELPERS
    */
    function onInputChanged(text) {
        setPhone(text.replace(/[^0-9]/g, ''));
    }

    return (
        <View
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                <ScrollView
                    nestedScrollEnabled
                    contentContainerStyle={{
                        margin: SIZES.padding,
                        borderWidth: 0.3,
                        borderColor: COLORS.border_color,
                        borderRadius: 10
                    }}
                >
                    {renderHeader()}

                    {renderDetails()}

                    <Divider />

                    {renderHistory()}
                </ScrollView>

            </LinearGradient>
        </View>
    )
}

export default Account;