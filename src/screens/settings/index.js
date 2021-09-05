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
import { ListItem } from '../../components';
// import styles from './styles';

const accounts = [
    { name: 'GT Bank', type: 'Bank Account', icon: 'bank' },
    { name: 'Vodafone Cash', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'MTN MoMo', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'Visa', type: 'Credit Card', icon: 'credit_card' },
    { name: 'GCB', type: 'Bank Account', icon: 'bank' }
]

const Settings = ({ navigation }) => {

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
                onPress={() => navigation.openDrawer()}
            >
                <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.logo_tint
                    }}
                />
            </TouchableOpacity>
        )
    }
    function renderDetails() {
        return (
            <View style={{ marginTop: SIZES.padding * 3 }}>

                <View
                    style={{ margin: SIZES.padding * 2 }}
                >
                    <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>DISPLAY</Text>
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


    function renderGoButton() {
        return (
            <View style={{ margin: 2, marginHorizontal: SIZES.padding * 5 }}>
                <TouchableOpacity
                    style={{
                        // ...styles.button
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
                {renderHeader()}

                {renderDetails()}
            </LinearGradient>
        </View>
    )
}

export default Settings;