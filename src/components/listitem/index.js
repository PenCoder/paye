import React from 'react';
import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import styles from './styles';

const ListItem: React.FC<itemProps> = (props) => {
    const { title, subtitle, rightItem, leftItem, borderBottom, style, onPress } = props;

    return (
        <TouchableOpacity style={{ ...style }}
            onPress={onPress}
        >
            <View style={{
                borderWidth: borderBottom ? 0.3 : 0,
                ...styles.item
            }}>
                {leftItem &&
                    <View
                        style={{
                            width: 70,
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {leftItem}
                    </View>
                }
                <View
                    style={{
                        width: "70%",
                    }}
                >
                    {title &&
                        <View
                            style={{ ...styles.titleContainer }}
                        >
                            <Text style={{ ...styles.title }}>{title && title}</Text>
                        </View>
                    }
                    {subtitle &&
                        <View
                            style={{ ...styles.subtitleContainer }}
                        >
                            <Text style={{ ...styles.subtitle }}>{subtitle && subtitle}</Text>
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

interface itemProps {
    title?: String,
    subtitle?: String,
    borderBottom?: Boolean,
    leftItem?: React.ReactNode,
    rightItem?: React.ReactNode,
    style: StyleProp<TextStyle>,
    onPress?: () => void,
}

export default ListItem;