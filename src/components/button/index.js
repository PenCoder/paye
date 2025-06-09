import React, { useState, useEffect } from 'react';
import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import styles from './styles';

const Button: React.FC<buttonProps> = (props) => {
    const [isChecked, setChecked] = useState(false);

    const { title, onPress, style } = props;

    return (
        <View
            style={{
                margin: 2,
                paddingHorizontal: SIZES.padding * 5,
                marginBottom: SIZES.padding
            }}
        >
            <TouchableOpacity
                style={{
                    ...style,
                    ...styles.button
                }}
                onPress={onPress}
            >
                <Text style={{ color: COLORS.text_pri, ...FONTS.h3 }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

interface buttonProps {
    title: String,
    onPress: () => void;
    style?: StyleProp<TextStyle>,
}

export default Button;