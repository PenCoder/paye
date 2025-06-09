/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input } from '../../components';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { validateInput, isBiometricEnabled, unlockWithBiometrics, setIsBiometricEnabled, saveBiometricSecret, signInUser } from '../../helpers';
import styles from './styles';

const SignIn = ({ navigation }) => {
    /*
    * STATE HOOKS
    */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [validate, setValidate] = useState('');
    const [biometricEnabled, setBiometricEnabled] = useState(false);

    /*
    * USE EFFECT HOOKS
    */
    useEffect(() => {
        unlock();
    }, [unlock]);

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
                        width: '50%',
                        tintColor: COLORS.logo_tint,
                    }}
                />
            </View>
        );
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 4,
                }}
            >

                {/* Email */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>EMAIL</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Input
                            name="email"
                            style={{
                                ...styles.formInput,
                            }}
                            // placeholder="ENTER EMAIL"
                            placeholderTextColor={COLORS.text_pri}
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                            validate={validate}
                        />
                    </View>
                </View>


                {/* Password */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>PASSWORD</Text>
                    <Input
                        name="password"
                        style={{
                            ...styles.formInput,
                        }}
                        // placeholder="ENTER PASSWORD"
                        placeholderTextColor={COLORS.text_pri}
                        selectionColor={COLORS.text_pri}
                        secureTextEntry={!passwordVisible}
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        value={password}
                        validate={validate}
                        textContentType="password"
                        errMsg={'Password length should 6 or more.'}
                        otherItem={
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 10,
                                    height: 30,
                                    width: 30,
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Image
                                    source={passwordVisible ? icons.disable_eye : icons.eye}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.text_pri,
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    />

                </View>
            </View>
        );
    }

    function renderButton() {
        return (
            <View >
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{ ...styles.button }}
                        onPress={() => onSignIn()}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        margin: SIZES.padding * 3,
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>DON'T HAVE AN ACCOUNT? </Text>
                    <TouchableOpacity
                        style={{ ...styles.link }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{ color: COLORS.text_link, ...FONTS.body3, textDecorationLine: 'underline' }}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    /*
    * HELPERS
    */
    //    SUBMIT SIGN IN INFO
    const onSignIn = React.useCallback(async () => {
        // Validate Inputs
        let validEmail = validateInput('email', email);
        let validPassword = validateInput('password', password);

        if (validEmail && validPassword) {
            const signin = await signInUser(email, password);
            if (signin) {
                if (!biometricEnabled) {
                    Alert.alert(
                        'Biometric Authentication',
                        'Do you want to enable biometric authentication for future logins?',
                        [
                            {
                                text: 'No',
                                onPress: () => navigation.replace('Main'),
                                style: 'cancel',
                            },
                            {
                                text: 'Yes',
                                onPress: async () => {
                                    await setIsBiometricEnabled(true);
                                    saveBiometricSecret(email, password);
                                    navigation.replace('Main');
                                },
                            },
                        ]
                    );
                } else {
                    navigation.replace('Main');
                }
            }
        } else if (!validEmail) {
            setValidate('email');
        } else if (!validPassword) {
            setValidate('password');
        }
    }, [email, password, biometricEnabled, navigation]);

    const unlock = React.useCallback(async () => {
        const isBiometricAvailable = await isBiometricEnabled();
        if (!isBiometricAvailable) {
            setBiometricEnabled(false);
            return;
        }
        setBiometricEnabled(true);
        const credentials = await unlockWithBiometrics();
        if (credentials) {
            setEmail(credentials.username);
            setPassword(credentials.password);
            console.log('email:', email);
            console.log('password:', password);
            onSignIn();
        } else {
            Alert.alert('Biometric authentication failed or not available');
        }
    }, [email, password, onSignIn]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1, paddingTop: SIZES.padding * 7}}
            >
                <ScrollView keyboardShouldPersistTaps="handled">
                    {/* {renderHeader()} */}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
