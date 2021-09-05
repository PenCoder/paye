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

const Step2 = ({ navigation, route }) => {

    // Get User Parameter 
    const { user } = route.params;

    /*
    * STATE HOOKS
    */
    const [phone, setPhone] = useState(user.phone || '');

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
                    STEP 2 OF 4
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
        let valid = validateInput('telephoneNumber', phone);

        if (valid) {
            user['phone'] = phone;
            user['country'] = selectedCountry?.name;
            user['country-code'] = selectedCountry?.code;
            navigation.navigate('Step3', { user })
        } else {
            setValidate('phone-number');
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
                                    // placeholder="ENTER PHONE NUMBER"
                                    placeholderTextColor={COLORS.text_pri}
                                    value={phone}
                                    validate={validate}
                                    keyboardType="numeric"
                                    maxLength={10}
                                    textContentType="telephoneNumber"
                                    onChangeText={setPhone}
                                />
                            </View>
                        </View>
                    </View>
                    {renderButton()}
                </ScrollView>

                {renderCountriesListModal()}
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Step2;