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
    View,
    Picker
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input } from '../../components';

// Constants
import { COLORS, SIZES, FONTS, icons, images } from '../../constants';
import styles from './styles';

const types = ['Bank Account', 'Mobile Wallet', 'Credit Card'];

const AccountForm = ({ navigation }) => {

    /*
    * STATE HOOKS
    */
    const [accountType, setAccountType] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [isValid, setValid] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    /*
    * USE EFFECT HOOKS
    */
    useEffect(() => {

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
                        ...FONTS.h3
                    }}
                >
                    ADD ACCOUNT
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
                {/* Account Type */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>ACCOUNT TYPE</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                height: 50,
                                marginRight: 5,
                                borderBottomColor: COLORS.text_pri,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            onPress={() => setModalVisible(true)}
                        >

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>{accountType || 'SELECT ACCOUNT TYPE'}</Text>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 10,
                                    height: 30,
                                    width: 30
                                }}
                            >
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 8,
                                        height: 8,
                                        tintColor: COLORS.text_pri
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Email */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>EMAIL</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            name="email"
                            style={{
                                ...styles.formInput
                            }}
                            placeholder="ENTER EMAIL"
                            placeholderTextColor={COLORS.text_pri}
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                </View>


                {/* Password */}
                <View style={{ marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body5 }}>PASSWORD</Text>
                    <Input
                        style={{
                            ...styles.formInput
                        }}
                        placeholder="ENTER PASSWORD"
                        placeholderTextColor={COLORS.text_pri}
                        selectionColor={COLORS.text_pri}
                        secureTextEntry={!passwordVisible}
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        value={password}
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
            <View >
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{
                            ...styles.button
                        }}
                        onPress={() => navigation.navigate('Main')}
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

    function renderAccountTypesModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row', borderBottomWidth: 0.2 }}
                    onPress={() => {
                        setAccountType(item);
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
                    <Text style={{ ...FONTS.body4, marginRight: 10, color: COLORS.text_pri }}>{item}</Text>
                    {/* <Text style={{ ...FONTS.body4, color: COLORS.text_pri }}>{item.name}</Text> */}
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
                                width: SIZES.width * 0.6,
                                backgroundColor: COLORS.bg1,
                                // borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={types}
                                renderItem={renderItem}
                                keyExtractor={item => item}
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
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderAccountTypesModal()}
        </KeyboardAvoidingView>
    )
}

export default AccountForm;