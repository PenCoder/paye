import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, PINCode, FingerPrint } from '../../components';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { validateInput } from '../../helpers';
import styles from './styles';

const PINAuth = ({ navigation }) => {

    /*
    * STATE HOOKS
    */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [validate, setValidate] = useState('');
    const [isValid, setValid] = useState(false);


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
    // Main Logo 
    function renderLogo() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100,
                    marginTop: SIZES.padding * 4,
                }}
            >
                <Image
                    source={images.payeLogo}
                    resizeMode="contain"
                    style={{
                        width: "50%",
                        tintColor: COLORS.logo_tint
                    }}
                />
            </View>
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

    function renderFingerPrint() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    alignSelf: 'center'
                }}
            >
                <FingerPrint />
            </View>
        )
    }

    /*
    * HELPERS
    */
    //    SUBMIT SIGN IN INFO
    function onSignUp() {
        // Validate Inputs 
        let validEmail = validateInput('emailAddress', email);
        let validPassword = validateInput('password', password);
        navigation.navigate('Main')
        return;
        if (validEmail && validPassword) {
            user['email'] = email.trim();
            user['password'] = password;
            // navigation.navigate('Step2', {user})
            navigation.navigate('Main')
        } else if (!validEmail) {
            setValidate('email');
        }
        else if (!validPassword) {
            setValidate('password');
        }
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