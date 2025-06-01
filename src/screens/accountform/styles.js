import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    formInput: {
        flex: 1,
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.text_pri,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.text_pri,
        ...FONTS.body4,
        letterSpacing: 2
    },
    button: {
        height: 60,
        backgroundColor: COLORS.bg2,
        borderRadius: SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    link: {
        height: 60,
        borderRadius: SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;