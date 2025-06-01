/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PINCode, FingerPrint } from '../../components';
// import TouchID from 'react-native-touch-id';
import ReactNativeBiometrics from 'react-native-biometrics';
import * as Keychain from 'react-native-keychain';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
// import { validateInput } from '../../helpers';

const rnBiometrics = new ReactNativeBiometrics();

const Authenticate = ({ navigation }) => {
    const [biometryType, setBiometryType] = useState(null);
    const [inputSecret, setInputSecret] = useState('');
    const [storedSecret, setStoredSecret] = useState(null);

    useEffect(() => {
        rnBiometrics.isSensorAvailable()
            .then(({available, biometryType}) => {
                if (available){
                    setBiometryType(biometryType);
                }else{
                    Alert.alert("Biometric authentication not available");
                }
            })
            .catch(error => {
                console.log('Biometric error: ', error);
            });
    }, []);
    /*
    * STATE HOOKS
    */
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordVisible, setPasswordVisible] = useState(false);

    // const [validate, setValidate] = useState('');
    // const [isValid, setValid] = useState(false);

    const saveSecret = async () => {
        if (!inputSecret) {
            Alert.alert('Please enter a secret');
            return;
        }
        try {
            await Keychain.setGenericPassword('user', inputSecret, {
                accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
                authenticationPrompt: {
                    title: 'Authenticate to save secret',
                },
                service: 'com.paye.biometric',
            });
        } catch (error) {
            Alert.alert('Error saving secret', error.message);
        }
    };

    const unlockWithBiometrics = async () => {
        try {
            const credentials = await Keychain.getGenericPassword({
                authenticationPrompt: {
                    title: 'Authenticate to unlock',
                },
                service: 'com.paye.biometric',
            });
            if (credentials) {
                setStoredSecret(credentials.password);
                Alert.alert('Secret unlocked!', `Secret: ${credentials.password}`);
            }else {
                Alert.alert('No secret found. Please save a secret first.');
            }
        } catch (error) {
            Alert.alert('Authentication Failed!', error.message);
        }
    };
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
                    paddingHorizontal: SIZES.padding * 2,
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: COLORS.white }}
                />
            </TouchableOpacity>
        );
    }
    // Main Logo
    // function renderLogo() {
    //     return (
    //         <View
    //             style={{
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 height: 100,
    //                 marginTop: SIZES.padding * 4,
    //             }}
    //         >
    //             <Image
    //                 source={images.payeLogo}
    //                 resizeMode="contain"
    //                 style={{
    //                     width: '50%',
    //                     tintColor: COLORS.logo_tint,
    //                 }}
    //             />
    //         </View>
    //     );
    // }
    
    // Render PIN Input
    // function renderPINInput() {
    //     return (
    //         <View
    //             style={{
    //                 marginTop: SIZES.padding * 6,
    //             }}
    //         >
    //             <PINCode />

    //         </View>
    //     );
    // }

    function renderFingerPrint() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    alignSelf: 'center',
                }}
            >
                <FingerPrint
                    onPress={() => navigation.replace('Main')}
                />
            </View>
        );
    }

    function renderGoToPin() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end', bottom: SIZES.padding * 4 }}>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 6,
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}
                    onPress={() => navigation.navigate('PINAuth')}
                >

                    <Image
                        source={icons.tabs}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.text_sec,
                            margin: SIZES.padding * 2,
                        }}
                    />
                    <Text style={{ color: COLORS.text_sec, ...FONTS.h2 }}>ENTER PIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
    // Main Render
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                <View style={{ padding: 32, flex: 1, justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
                        {biometryType ? `Biometric: ${biometryType}` : "Checking biometrics..."}
                    </Text>
                    <TextInput
                        placeholder="Enter secret to store"
                        value={inputSecret}
                        onChangeText={setInputSecret}
                        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 8 }}
                    />
                    <Button title="Save Secret with Biometrics" onPress={saveSecret} />
                    <View style={{ height: 32 }} />
                    <Button title="Unlock Secret with Biometrics" onPress={unlockWithBiometrics} />
                    {storedSecret && (
                        <Text style={{ marginTop: 32, fontSize: 16 }}>
                        Unlocked Secret: {storedSecret}
                        </Text>
                    )}
                </View>
                {/* {renderHeader()}
                <View style={{ marginTop: SIZES.padding * 18 }}>
                    {renderFingerPrint()}
                </View>
                {renderGoToPin()} */}
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default Authenticate;
