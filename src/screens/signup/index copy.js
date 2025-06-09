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

const SignUp = ({ navigation }) => {

    /*
    * STATE HOOKS
    */
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [validate, setValidate] = useState(false);

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
                    SIGN UP
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
                <View
                    style={{
                        margin: SIZES.padding * 3,
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>ALREADY HAVE ACCOUNT? </Text>
                    <TouchableOpacity
                        style={{ ...styles.link }}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body4, textDecorationLine: 'underline' }}>SIGN IN</Text>
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
    //    SUBMIT SIGN UP INFO
    function onSignUp() {
        const formInputs = [fullname, email, phone, password];
        for (let key of Array.keys(formInputs)) {
            let validity = validateInput(key, formInputs[key]);
            alert(validity)
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
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderCountriesListModal()}
        </KeyboardAvoidingView>
    )
}

export default SignUp;