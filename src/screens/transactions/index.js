import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES, images } from '../../constants';
import { ListItem } from '../../components';
import styles from './styles';

const transactions = [
    { account: "234374889", amount: 200, date: '2021-05-02 9:30:03', icon: 'send' },
    { account: "768653463", amount: 500, date: '2021-07-02 12:12:20', icon: 'send' },
    { account: "786901234", amount: 150, date: '2021-07-04 8:00:10', icon: 'send' },
    { account: "800906540", amount: 4000, date: '2021-07-08 11:12:12', icon: 'send' },
    { account: "645000210", amount: 2100, date: '2021-08-02 02:09:00', icon: 'send' },
]

const Transactions = ({ navigation }) => {

    // State Hooks
    const [phone, setPhone] = useState('');

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 3
                }}
                onPress={() => navigation.openDrawer()}
            >
                <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.logo_tint
                    }}
                />
                <Text
                    style={{
                        marginLeft: SIZES.padding * 1.5,
                        color: COLORS.text_pri,
                        ...FONTS.h3
                    }}
                >
                    TRANSACTIONS
                </Text>
            </TouchableOpacity>
        )
    }
    function renderItem({ item, index }) {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.3,
                    borderRadius: 10,
                    borderColor: COLORS.border_color,
                    margin: SIZES.padding * 0.5,
                }}
                onPress={() => navigation.navigate('Transaction', { transation: item })}
            >
                <View style={{ width: '15%' }}>
                    <View
                        style={{
                            backgroundColor: COLORS.bg_gd_top,
                            borderRadius: 30,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: SIZES.padding
                        }}
                    >
                        <Image
                            source={icons[item.icon]}
                            style={{
                                height: '40%',
                                width: '40%',
                                tintColor: COLORS.logo_tint
                            }}
                        />
                    </View>
                </View>
                <View style={{ margin: SIZES.padding, width: '55%' }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>{item.account}</Text>
                    <Text style={{ color: COLORS.text_sec, ...FONTS.body4 }}>{item.date}</Text>
                </View>
                <View style={{ margin: SIZES.padding, width: '30%' }}>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body2 }}>₵ {item.amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    function renderListHeader() {
        return (
            <View
                style={{
                    padding: SIZES.padding * 3,
                    marginBottom: SIZES.padding * 4,
                    backgroundColor: COLORS.bg_gd_down,
                }}
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.text_pri,
                            ...FONTS.h1
                        }}
                    >₵505,800</Text>
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>Ghana Cedis</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: SIZES.padding * 0.9,
                            marginTop: SIZES.padding * 1.5,
                            borderRadius: 5
                        }}
                        onPress={() => navigation.navigate('AccountForm')}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>+ Add Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    function renderGoButton() {
        return (
            <View style={{ margin: 2, marginHorizontal: SIZES.padding * 5 }}>
                <TouchableOpacity
                    style={{
                        ...styles.button
                    }}
                    onPress={() => navigation.navigate('Categories')}
                >
                    <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>GO</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /*
    * HELPERS
    */
    function onInputChanged(text) {
        setPhone(text.replace(/[^0-9]/g, ''));
    }

    return (
        <View
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                {renderHeader()}
                <FlatList
                    data={transactions}
                    renderItem={renderItem}
                    initialNumToRender={10}
                    stle={{
                        marginHorizontal: COLORS.padding
                    }}
                    style={{
                        // marginHorizontal: SIZES.padding,
                        marginTop: SIZES.padding * 3,
                        marginBottom: SIZES.padding * 5,
                        // padding: SIZES.padding,
                        // backgroundColor: COLORS.bg_gd_down,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                />

            </LinearGradient>
        </View>
    )
}

export default Transactions;