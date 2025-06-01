import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    item: {
        height: 50,
        marginHorizontal: SIZES.padding * 3,
        flexDirection: 'row',
        backgroundColor: COLORS.bg2,
        margin: SIZES.padding,
        alignItems: 'center'
    },
    number: {
        height: 30,
        width: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: SIZES.padding,
        color: COLORS.text_pri,
        backgroundColor: COLORS.bg_gd_top,
        borderRadius: 15,
        ...FONTS.body2
    },
    shadow5: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    formInput: {
        flex: 1,
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.text_pri,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.text_pri,
        ...FONTS.body3,
        // letterSpacing: 2
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