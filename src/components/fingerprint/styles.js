import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 150,
        borderRadius: 90,
        borderWidth: 0.2,
        borderColor: COLORS.border_color,
        backgroundColor: COLORS.bg_gd_down,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scaleY: 1.3 }],
    },

});

export default styles;