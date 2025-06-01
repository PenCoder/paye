import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    shadow5: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10
    },
    formInput: {
        flex: 1,
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.text_pri,
        borderBottomWidth: 1,
        height: 60,
        color: COLORS.text_pri,
        ...FONTS.body1,
    },
    button: {
        flex: 1,
        height: 60,
        backgroundColor: COLORS.bg2,
        borderRadius: SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    }
});

export default styles;