import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import styles from './styles';

const Paymment = ({ navigation }) => {

    // State Hooks
    const [amount, setAmount] = useState('');

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 3
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />
                {/* <Text
                    style={{
                        marginLeft: SIZES.padding * 3,
                        color: COLORS.text_pri,
                        ...FONTS.h2
                    }}
                >
                    PAYMENT
                </Text> */}
            </TouchableOpacity>
        )
    }


    function renderCodeInput() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding2 * 15,
                    marginBottom: SIZES.padding * 10,
                    marginHorizontal: SIZES.padding * 6
                }}
            >
                <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>AMOUNT</Text>
                <TextInput
                    style={{
                        textAlign: 'center',
                        ...styles.formInput,
                    }}
                    placeholder="ENTER AMOUNT"
                    placeholderTextColor={COLORS.text_pri}
                    keyboardType='numeric'
                    value={amount}
                    defaultValue={'0'}
                    onChangeText={onInputChanged}
                />

                <Text
                    style={{
                        color: COLORS.text_pri,
                        textAlign: 'center',
                        ...FONTS.body3
                    }}>{amount + 'GHC'}</Text>

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
                    onPress={() => navigation.navigate('Accessories')}
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
        setAmount(text.replace(/[^0-9]/g, ''));
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
                <ScrollView>
                    {renderHeader()}
                    {renderCodeInput()}
                    {renderGoButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Paymment;