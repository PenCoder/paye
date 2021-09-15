import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    FlatList,
    TextInput,
    Keyboard,
    Image,
} from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import styles from './styles';

const PINCode: React.FC<pinProps> = (props) => {
    const [isChecked, setChecked] = useState(false);
    const [pin, setPin] = useState([]);

    const { title, onPress, style } = props;

    function keyPad(number) {
        return (
            <TouchableOpacity
                style={{ ...styles.key }}
                onPress={() => onKeyPressed(number)}
            >
                <Text style={{ color: COLORS.text_pri, ...FONTS.body1 }}>{number}</Text>
            </TouchableOpacity>
        )
    }
    function enterKeyPad(number) {
        return (
            <TouchableOpacity
                style={{ ...styles.key }}
                onPress={() => onKeyPressed(number)}
            >
                <Image
                    source={icons.done}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.logo_tint,
                    }}
                />
            </TouchableOpacity>
        )
    }

    function deleteKey() {
        return (
            <TouchableOpacity
                style={{
                    height: 70,
                    width: 70,
                    margin: SIZES.padding,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => onDelete()}
            >
                <Image
                    source={icons.delete_icon}
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: COLORS.logo_tint,
                    }}
                />
                {/* <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>delete</Text> */}
            </TouchableOpacity>
        )
    }

    // HELPERS
    function onKeyPressed(number: Number) {
        if (pin.length < 6) {
            setPin([...pin, number]);
        }
    }

    function onDelete() {
        if (pin.length > 0) {
            let arr = pin;
            arr.pop();
            setPin([...arr])
        }
    }

    return (
        <View
            style={{
                margin: 2,
                paddingHorizontal: SIZES.padding * 5,
                marginBottom: SIZES.padding
            }}
        >
            <View style={{ alignItems: 'center', margin: SIZES.padding * 2 }}>
                <Text style={{ color: COLORS.text_pri, ...FONTS.h2 }}>ENTER PIN</Text>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled
                renderItem={({ item, index }) =>
                    keyPad(item)
                }
                contentContainerStyle={{ alignItems: 'center' }}
                ListHeaderComponent={
                    <View style={{ flexDirection: 'row', width: 200 }}>
                        <View style={{ flex: 1 }}>

                            <TextInput
                                // caretHidden
                                showSoftInputOnFocus={false}
                                value={pin.join('')}
                                style={{
                                    ...styles.input
                                }}
                                secureTextEntry
                            />
                        </View>
                        {/* {deleteKey()} */}
                    </View>
                }
                ListFooterComponent={() =>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 80 }}></View>
                        {keyPad(0)}
                        {deleteKey()}
                    </View>
                }
            />
        </View>
    )
}

interface pinProps {
    title: String,
    onPress: () => void;
    style?: StyleProp<TextStyle>,
}

export default PINCode;