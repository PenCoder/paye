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

const SignIn = ({ navigation }) => {

    /*
    * STATE HOOKS
    */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [validate, setValidate] = useState('');
    const [isValid, setValid] = useState(false);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    /*
    * USE EFFECT HOOKS
    */
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => {
                let countryData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                    }
                });
                setCountries(countryData);
                if (countryData.length > 0) {
                    let defaultCountry = countryData.find(c => c.code === 'GH');
                    if (defaultCountry) {
                        setSelectedCountry(defaultCountry);
                    }
                }
            })
    }, [])

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
                onPress={() => console.log("Go Back")}
            >

                <Text
                    style={{
                        marginLeft: SIZES.padding * 1.5,
                        color: COLORS.text_pri,
                        ...FONTS.h3
                    }}
                >
                    SIGN IN
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

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 4
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
                            ...styles.formInput
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
            </View>
        )
    }

    function renderButton() {
        return (
            <View >
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{
                            ...styles.button
                        }}
                        onPress={() => onSignUp()}
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
                        justifyContent: 'center'
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
        )
    }

    function renderCountriesListModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row', borderBottomWidth: 0.2 }}
                    onPress={() => {
                        setSelectedCountry(item);
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4, marginRight: 10, color: COLORS.text_pri }}>{item.callingCode}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.text_pri }}>{item.name}</Text>
                </TouchableOpacity>

            )
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <View
                            style={{
                                height: SIZES.height * 0.9,
                                width: SIZES.width * 0.6,
                                backgroundColor: COLORS.bg1,
                                // borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={countries}
                                renderItem={renderItem}
                                keyExtractor={item => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
        navigation.navigate('Authenticate')
        return;
        if (validEmail && validPassword) {
            user['email'] = email.trim();
            user['password'] = password;
            // navigation.navigate('Step2', { user })
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
                style={{ flex: 1, paddingTop: SIZES.padding * 7}}
            >
                <ScrollView keyboardShouldPersistTaps="handled">
                    {/* {renderHeader()} */}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderCountriesListModal()}
        </KeyboardAvoidingView>
    )
}

export default SignIn;