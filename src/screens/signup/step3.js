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
import { validateInput } from '../../helpers';
import styles from './styles';

const Step3 = ({ navigation, route }) => {

    // Get User Parameter 
    const { user } = route.params;

    /*
    * STATE HOOKS
    */
    const [fullname, setFullName] = useState(user.fullname || '');

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
                    Step 3 of 4
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
                        tintColor: COLORS.logo_tints
                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding * 3
                }}
            >
                {/* Full Name */}
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>NAME</Text>
                    <Input
                        name="name"
                        style={{
                            ...styles.formInput
                        }}
                        placeholder="ENTER FULL NAME"
                        placeholderTextColor={COLORS.text_pri}
                        selectionColor={COLORS.text_pri}
                        textContentType="name"
                        value={fullname}
                        autoCapitalize="words"
                        onChangeText={setFullName}
                    />
                </View>

                {/* Email */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>EMAIL</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Input
                            name="email"
                            style={{
                                ...styles.formInput
                            }}
                            placeholder="ENTER EMAIL"
                            placeholderTextColor={COLORS.text_pri}
                            value={email}
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                        />
                    </View>
                </View>

                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>PHONE</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                width: 90,
                                height: 50,
                                marginRight: 5,
                                borderBottomColor: COLORS.text_pri,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 8,
                                        height: 8,
                                        tintColor: COLORS.text_pri
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Image
                                    source={{ uri: selectedCountry?.flag }}
                                    resizeMode='contain'
                                    style={{
                                        height: 30,
                                        width: 30
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>{selectedCountry?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>
                        <Input
                            name="phone-number"
                            style={{
                                ...styles.formInput
                            }}
                            placeholder="ENTER PHONE NUMBER"
                            placeholderTextColor={COLORS.text_pri}
                            value={phone}
                            keyboardType="numeric"
                            maxLength={10}
                            onChangeText={setPhone}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>PASSWORD</Text>
                    <Input
                        name="password"
                        style={{
                            ...styles.formInput
                        }}
                        placeholder="ENTER PASSWORD"
                        placeholderTextColor={COLORS.text_pri}
                        selectionColor={COLORS.text_pri}
                        secureTextEntry={passwordVisible}
                        value={password}
                        autoCapitalize="none"
                        onChangeText={setPassword}
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
        let valid = validateInput('name', fullname);

        if (valid) {
            user['fullname'] = fullname.trim();
            navigation.navigate('Step4', { user })
        } else {
            setValidate('name');
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
                        {/* Full Name */}
                        <View style={{ marginTop: SIZES.padding * 3 }}>
                            <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>FULL NAME</Text>
                            <Input
                                name="name"
                                style={{
                                    ...styles.formInput
                                }}
                                // placeholder="ENTER FULL NAME"
                                placeholderTextColor={COLORS.text_pri}
                                selectionColor={COLORS.text_pri}
                                textContentType="name"
                                value={fullname}
                                validate={validate}
                                autoCapitalize="words"
                                onChangeText={setFullName}
                            />
                        </View>
                    </View>
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Step3;