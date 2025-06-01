import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    outer: {
        height: 20,
        width: 20,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: COLORS.gray,
        // backgroundColor: COLORS.text_sec,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        width: 13,
        height: 13,
        borderRadius: 10,
        backgroundColor: COLORS.text_sec,
    },
});

export default styles;