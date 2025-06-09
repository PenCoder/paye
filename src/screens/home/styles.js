import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    ring1: {
        height: 180,
        width: 180,
        borderRadius: 100,
        backgroundColor: COLORS.transparent,
        borderWidth: 15,
        borderColor: COLORS.ring1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ring2: {
        height: 210,
        width: 210,
        borderRadius: 120,
        backgroundColor: COLORS.transparent,
        borderWidth: 15,
        borderColor: COLORS.ring2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ring3: {
        height: 230,
        width: 230,
        borderRadius: 150,
        backgroundColor: COLORS.transparent,
        borderWidth: 15,
        borderColor: COLORS.ring3,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        height: 50,
        color: COLORS.text_pri,
        ...FONTS.body2,
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