import React from 'react';
import { FlatList, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import styles from './styles';

const categories = ['Tithe', 'Offering', 'Project']

const Categories = ({ navigation }) => {

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 3
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
                        marginLeft: SIZES.padding * 3,
                        color: COLORS.text_pri,
                        ...FONTS.h2
                    }}
                >
                    CATEGORIES
                </Text>
            </TouchableOpacity>
        )
    }
    function renderItem({ index, item }) {
        return (

            <TouchableOpacity
                key={index}
                style={{ ...styles.item, ...styles.shadow5 }}
                onPress={() => navigation.navigate('Payment')}
            >
                <Text style={{
                    ...styles.number,
                    ...styles.shadow5
                }}>{index + 1}</Text>
                <Text style={{
                    marginVertical: SIZES.padding,
                    color: COLORS.text_pri,
                    marginLeft: SIZES.padding,
                    ...FONTS.body2
                }}>{item}</Text>
            </TouchableOpacity>
        )
    }

    function renderCodeInput() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 6,
                    marginBottom: SIZES.padding * 10,
                    marginHorizontal: SIZES.padding * 5
                }}
            >
                <TextInput
                    style={{
                        textAlign: 'center',
                        ...styles.formInput,
                    }}
                    placeholder="ENTER PHONE NUMBER"
                    placeholderTextColor={COLORS.text_pri}
                />
            </View>
        )
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : null}
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                {renderHeader()}
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    style={{ marginTop: SIZES.padding * 6 }}
                />
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Categories;