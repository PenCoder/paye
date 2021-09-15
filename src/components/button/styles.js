import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
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