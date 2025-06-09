import React, { useState, useEffect } from 'react';
import { View, Text, StyleProp, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../../constants';
import styles from './styles';

const FingerPrint: React.FC<fingerPrintProps> = (props) => {

    const { onPress } = props;

    return (
        <TouchableOpacity
            style={{ ...styles.container }}
            onPress={onPress}
        >
            <Image
                source={icons.fingerprint}
                style={{
                    height: 60,
                    width: 60,
                    tintColor: COLORS.primary
                }}
            />
        </TouchableOpacity>
    )
}

interface fingerPrintProps {
    onPress: () => void
}

export default FingerPrint;