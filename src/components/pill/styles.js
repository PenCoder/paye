import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    pill: {
        height: 30,
        borderRadius: 15,
        borderWidth: 0.3,
        margin: SIZES.padding,
        borderColor: COLORS.border_color,
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