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
    Switch
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES, images } from '../../constants';
import { ListItem, Radio, Divider } from '../../components';
// import styles from './styles';


const Settings = ({ navigation }) => {

    // State Hooks
    const [selectedTheme, setSelectedTheme] = useState('');

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
            <View style={{ marginTop: SIZES.padding * 3, margin: SIZES.padding * 2 }}>

                <View
                    style={{ margin: SIZES.padding * 2 }}
                >
                    <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>DISPLAY</Text>
                </View>
                <View
                    style={{
                        margin: SIZES.padding
                    }}
                >

                    <Radio
                        label="LIGHT THEME"
                        value="light"
                        selected={selectedTheme}
                        onChanged={setSelectedTheme}
                    />

                    <Radio
                        label="DARK THEME"
                        value="dark"
                        selected={selectedTheme}
                        onChanged={setSelectedTheme}
                    />
                </View>
                <Divider />
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