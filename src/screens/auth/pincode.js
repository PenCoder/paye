import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PINCode, FingerPrint } from '../../components';

// Constants
import { COLORS, SIZES, icons, images } from '../../constants';
import { validateInput } from '../../helpers';

const PINAuth = ({ navigation }) => {

    /*
    * RENDER ITEMS
    */
    // SIgn Up Header
    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
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
            </TouchableOpacity>
        )
    }

    function renderPINInput() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 6
                }}
            >
                <PINCode />

            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1, }}
            >
                {renderHeader()}

                {renderPINInput()}

            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default PINAuth;