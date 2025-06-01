import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    formInput: {
        flex: 1,
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.text_pri,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3,
        letterSpacing: 2
    },
});

export default styles;