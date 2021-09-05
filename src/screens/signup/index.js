import { createStackNavigator } from '@react-navigation/stack';
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
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import styles from './styles';

// Stack Navigator Object
const Stack = createStackNavigator();

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

    function renderButton(onPress) {
        return (
            <View>
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{
                            ...styles.button
                        }}
                        onPress={onPress}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
                {/* <View
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
                </View> */}
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

    function onSubmitStep3() {

    }
    function onSignUp() {
        const formInputs = [fullname, email, phone, password];
        for (let key of Array.keys(formInputs)) {
            let validity = validateInput(key, formInputs[key]);
            alert(validity)
        }
    }

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Step1" component={Step1} />
                <Stack.Screen name="Step2" component={Step2} />
                <Stack.Screen name="Step3" component={Step3} />
                <Stack.Screen name="Step4" component={Step4} />
            </Stack.Navigator>
        </>
    )
}

export default SignUp;