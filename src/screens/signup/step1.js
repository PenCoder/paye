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
import { Input } from '../../components';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import { validateInput } from '../../helpers';
import styles from './styles';

const Step1 = ({ navigation, route }) => {
    const user = route.params?.user || {};
    /*
    * STATE HOOKS
    */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

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
                    STEP 1 OF 4
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
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    /*
    * HELPERS
    */
    //    SUBMIT SIGN UP INFO
    function onSignUp() {
        let valid = validateInput('emailAddress', email);
        if (valid) {
            user['email'] = email.trim();
            navigation.navigate('Step2', { user })
        } else {
            setValidate('email');
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

                        {/* Email */}
                        <View style={{ marginTop: SIZES.padding }}>
                            <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>EMAIL</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Input
                                    name="email"
                                    style={{
                                        ...styles.formInput
                                    }}
                                    // placeholder="ENTER EMAIL"
                                    placeholderTextColor={COLORS.text_pri}
                                    value={email}
                                    validate={validate}
                                    textContentType="emailAddress"
                                    autoCapitalize="none"
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>

                    </View>
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Step1;