import React, { useState, ReactNode, useEffect } from 'react';
import {
    StyleProp,
    Text,
    TextInput,
    TextStyle,
    View
} from 'react-native'
import { COLORS } from '../../constants';
import { validateInput } from '../../helpers';
import styles from './styles';

const emailExp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const Input: React.FC<InputProps> = (props) => {
    // HOOKS
    const [isValid, setValid] = useState(true);

    // PROPS 
    const { validate, name, value } = props;

    useEffect(() => {
        if (validate && validate === name) {
            onTextChange(value)
        }
    }, [validate])

    // When Text is Changed
    function onTextChange(text: String) {
        if (props.onChangeText) {
            props.onChangeText(text);
        }

        let test = validateInput(props.textContentType, text);
        // Set Valid 
        setValid(test);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TextInput
                    {...props}
                    value={props.value}
                    style={{
                        ...styles.formInput,
                        borderBottomColor: isValid ? COLORS.text_pri : COLORS.red
                    }}
                    onChangeText={onTextChange}
                    placeholderTextColor={COLORS.darkgray}
                />
                {props.otherItem &&
                    props.otherItem
                }
            </View>
            {!isValid &&
                <Text style={{ color: COLORS.red }}>
                    {props.errMsg ? props.errMsg : `Enter valid ${props.name}`}
                </Text>
            }
        </View>
    )
}

interface InputProps {
    value?: String,
    style: StyleProp<TextStyle>,
    textContentType?: String,
    name?: String,
    errMsg?: String,
    otherItem?: ReactNode,
    validate?: String,
    onChangeText?: ((text: string) => void)
}

export default Input;