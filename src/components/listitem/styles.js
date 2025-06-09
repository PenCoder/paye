import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 100,
        // width: "100%",
        flexDirection: 'row',
        borderColor: COLORS.border_color,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        marginTop: SIZES.padding,
        backgroundColor: COLORS.bg2,
        elevation: 1
    },
    titleContainer: {
        // margin: SIZES.padding * 0.5,

    },
    title: {
        color: COLORS.text_pri,
        ...FONTS.h4
    },
    subtitleContainer: {
        // margin: SIZES.padding * 0.5,
    },
    subtitle: {
        color: COLORS.text_sec,
        ...FONTS.body4
    }
});

export default styles;