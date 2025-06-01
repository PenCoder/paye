import React, { useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { Button } from '../../components'
import styles from './styles';

const options = [
    { title: "SEND MONEY", screen: "Payment" },
    { title: "PAY BILL", screen: "Payment" },
    { title: "RECEIVE TOKEN", screen: "Payment" },
    { title: "SCAN TO PAY", screen: "Scan" },
    { title: "MY ACCOUNTS", screen: "Accounts" }
]

const Home = ({ navigation }) => {

    // State Hooks
    const [phone, setPhone] = useState('');

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 3,
                    marginBottom: SIZES.padding * 6
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
    function renderRings() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 5,
                    // marginHorizontal: SIZES.padding * 8,
                    alignSelf: 'center'
                }}
            >
                <TouchableOpacity
                    style={{ ...styles.ring3, }}
                    onPress={() => navigation.navigate('Scan')}
                >
                    <View style={{ ...styles.ring2 }}>
                        <View
                            style={{ ...styles.ring1, }}
                        >
                            <Text style={{ color: COLORS.text_pri, ...FONTS.h1 }}>SCAN</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderCodeInput() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 6,
                    marginBottom: SIZES.padding * 8,
                    marginHorizontal: SIZES.padding * 6
                }}
            >
                <TextInput
                    style={{
                        textAlign: 'center',
                        ...styles.formInput,
                    }}
                    placeholder="ENTER TOKEN"
                    placeholderTextColor={COLORS.text_pri}
                    keyboardType='numeric'
                    textContentType='telephoneNumber'
                    value={phone}
                    onChangeText={onInputChanged}
                />
            </View>
        )
    }

    function renderGoButton() {
        return (
            <View style={{ margin: 2, marginHorizontal: SIZES.padding * 5, marginBottom: SIZES.padding * 8 }}>
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                <FlatList
                    data={options}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item, index }) => {
                        let value = index + 1;
                        return (
                            <Button
                                key={index}
                                title={`(${value}) ${item.title}`}
                                onPress={() => navigation.navigate(item.screen)}
                            />
                        )
                    }}
                    ListHeaderComponent={renderHeader()}
                    style={{
                        marginTop: SIZES.padding
                    }}
                />

            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Home;