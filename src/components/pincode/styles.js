import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    key: {
        height: 70,
        width: 70,
        borderRadius: 40,
        borderColor: COLORS.text_pri,
        borderWidth: 0.3,
        margin: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 60,
        width: '100%',
        alignSelf: 'center',
        // borderBottomColor: COLORS.text_pri,
        // borderBottomWidth: 1,
        paddingLeft: SIZES.padding * 4.5,
        ...FONTS.h1,
        letterSpacing: 4,
    }
});

export default styles;