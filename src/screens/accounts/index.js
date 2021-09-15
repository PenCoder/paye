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

const accounts = [
    { name: 'GT Bank', type: 'Bank Account', icon: 'bank' },
    { name: 'Vodafone Cash', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'MTN MoMo', type: 'Mobile Wallet', icon: 'mobile' },
    { name: 'Visa', type: 'Credit Card', icon: 'credit_card' },
    { name: 'GCB', type: 'Bank Account', icon: 'bank' }
]

const Accounts = ({ navigation }) => {

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
                    ACCOUNTS
                </Text>
            </TouchableOpacity>
        )
    }
    function renderItem({ item }) {
        return (
            <ListItem
                key={item}
                title={item.name}
                subtitle={item.type}
                borderBottom={true}
                onPress={() => navigation.navigate('Account', { account: {} })}
                leftItem={
                    <View
                        style={{
                            backgroundColor: COLORS.bg_gd_top,
                            borderRadius: 30,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
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
                }
            />
        )
    }
    function renderListHeader() {
        return (
            <View
                style={{
                    padding: SIZES.padding * 3,
                    marginBottom: SIZES.padding * 4,
                    backgroundColor: COLORS.bg_gd_down,
                    // borderTopLeftRadius: 10,
                    // borderTopRightRadius: 10,
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

    function renderFilterTab() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: SIZES.padding * 3,
                }}
            >
                <TouchableOpacity
                    style={{
                        height: 30,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.bg_gd_top
                    }}
                >
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>BANK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 30,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.bg_gd_top
                    }}
                >
                    <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>M. WALLET</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 30,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.bg_gd_top
                    }}
                >
                    <View
                        style={{

                        }}
                    >
                        <Text style={{ color: COLORS.text_pri, ...FONTS.body3 }}>CARD</Text>
                    </View>
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
                    data={accounts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    stle={{
                        marginHorizontal: COLORS.padding
                    }}
                    ListHeaderComponent={
                        <View>
                            {renderListHeader()}
                            {renderFilterTab()}
                        </View>
                    }
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

export default Accounts;