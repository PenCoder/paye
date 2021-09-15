import React, { useState, useEffect } from 'react';
import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import styles from './styles';

const Pill: React.FC<pillProps> = (props) => {
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
            style={{ ...styles.pill }}
            onPress={onSelected}
        >

        </TouchableOpacity>
    )
}

interface pillProps {
    value: String,
    label: String,
    selected: Boolean,
    onChanged: (value: String) => void;
    style: StyleProp<TextStyle>,
}

export default Pill;