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
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input } from '../../components';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { registerUser, validateInput } from '../../helpers';
import styles from './styles';

const Step4 = ({ navigation, route }) => {

    // Get User Parameter 
    const { user } = route.params;

    /*
    * STATE HOOKS
    */
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [validate, setValidate] = useState('');

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
                    marginTop: SIZES.padding * 4,
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
                <Text
                    style={{
                        marginLeft: SIZES.padding * 1.5,
                        color: COLORS.text_pri,
                        ...FONTS.h4
                    }}
                >
                    Step 4 of 4
                </Text>
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
                    marginTop: SIZES.padding,
                }}
            >
                <Image
                    source={images.payeLogo}
                    resizeMode="contain"
                    style={{
                        width: "40%",
                        tintColor: COLORS.logo_tint
                    }}
                />
            </View>
        )
    }

    function renderButton() {
        return (
            <View>
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{
                            ...styles.button
                        }}
                        onPress={() => onSignUp()}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    /*
    * HELPERS
    */
    //    SUBMIT SIGN UP INFO
    async function onSignUp() {
        let valid = validateInput('password', password);

        if (valid) {
            if (password === confirm) {
                user['password'] = password;

                let response = await registerUser(user);

                if (response) {
                    navigation.replace('Main', { user })
                } else {

                }

            } else {
                alert('Passwords do not match');
            }
        } else {
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
                <ScrollView keyboardShouldPersistTaps="handled">
                    {renderHeader()}
                    {/* {renderLogo()} */}
                    <View
                        style={{
                            marginTop: SIZES.padding * 20,
                            marginHorizontal: SIZES.padding * 3,
                            marginBottom: SIZES.padding * 8
                        }}
                    >
                        {/* Password */}
                        <View style={{ marginTop: SIZES.padding }}>
                            <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>PASSWORD</Text>
                            <Input
                                name="password"
                                style={{
                                    ...styles.formInput
                                }}
                                // placeholder="ENTER PASSWORD"
                                placeholderTextColor={COLORS.text_pri}
                                selectionColor={COLORS.text_pri}
                                secureTextEntry={!passwordVisible}
                                value={password}
                                validate={validate}
                                textContentType="password"
                                autoCapitalize="none"
                                onChangeText={setPassword}
                                errMsg={'Password length should 6 or more.'}
                                otherItem={
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            right: 0,
                                            bottom: 10,
                                            height: 30,
                                            width: 30
                                        }}
                                        onPress={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        <Image
                                            source={passwordVisible ? icons.disable_eye : icons.eye}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: COLORS.text_pri
                                            }}
                                        />
                                    </TouchableOpacity>
                                }
                            />

                        </View>
                        {/* Confirm Password */}
                        <View style={{ marginTop: SIZES.padding }}>
                            <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>CONFIRM PASSWORD</Text>
                            <TextInput
                                name="confirm-password"
                                style={{
                                    ...styles.formInput
                                }}
                                // placeholder="CONFIRM PASSWORD"
                                placeholderTextColor={COLORS.text_pri}
                                selectionColor={COLORS.text_pri}
                                secureTextEntry={!passwordVisible}
                                textContentType="password"
                                value={confirm}
                                autoCapitalize="none"
                                onChangeText={setConfirm}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 10,
                                    height: 30,
                                    width: 30
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Image
                                    source={passwordVisible ? icons.disable_eye : icons.eye}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.text_pri
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Step4;