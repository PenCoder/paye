import React from 'react';
import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const Divider: React.FC<dividerProps> = (props) => {

    return (
        <View
            style={{
                width: '85%',
                alignSelf: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: COLORS.border_color,
                marginVertical: SIZES.padding * 2,
            }}
        >
        </View>
    )
}

interface dividerProps {
    style: StyleProp<TextStyle>,
}

export default Divider;