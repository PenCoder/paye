import React, { useState, useEffect } from 'react';
import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import styles from './styles';

const Radio: React.FC<radioProps> = (props) => {
    const [isChecked, setChecked] = useState(false);

    const { value, label, selected, onChanged } = props;

    useEffect(() => {
        setChecked(selected === value);
    }, [selected])

    function onSelected() {
        onChanged(value);
    }

    return (
        <TouchableOpacity
            style={{ width: '100%' }}
            onPress={onSelected}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: SIZES.padding,
                    marginVertical: SIZES.padding * 2
                }}
            >
                <Text style={{ color: COLORS.text_pri, ...FONTS.body4 }}>{label}</Text>

                <TouchableOpacity
                    style={{
                        borderColor: isChecked ? COLORS.gray : COLORS.bg_gd_top,
                        ...styles.outer,
                    }}
                >
                    <View style={{
                        backgroundColor: isChecked ? COLORS.gray : COLORS.transparent,
                        ...styles.inner,
                    }}
                    >

                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

interface radioProps {
    value: String,
    label: String,
    selected: Boolean,
    onChanged: (value: String) => void;
    style: StyleProp<TextStyle>,
}

export default Radio;