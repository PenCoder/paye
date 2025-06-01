import React, { useRef } from 'react';
import {
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
// import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';

const Scan = ({ navigation }) => {
    const camera = useRef(null)
    // Header
    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 2,
                    marginBottom: SIZES.padding * 3,
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />
                <Text
                    style={{
                        marginLeft: SIZES.padding * 3,
                        color: COLORS.text_pri,
                        ...FONTS.h2
                    }}
                >
                    SCAN
                </Text>
            </TouchableOpacity>
        )
    }
    // Process Barcode
    function onBarCodeRead(result) {
        console.log(result.data)
    }

    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.bg_back }}
        >
            <LinearGradient
                colors={[COLORS.bg_gd_top, COLORS.bg_gd_down]}
                style={{ flex: 1 }}
            >
                {renderHeader()}
                {/* <RNCamera
                    ref={ref => {
                        camera.current = ref
                    }}
                    style={{ flex: 1, backgroundColor: 'red' }}
                    captureAudio={false}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    onBarCodeRead={onBarCodeRead}
                    androidCameraPermissionOptions={{
                        title: "Permission to use camera",
                        message: "Camera is required for barcode scanning",
                        buttonPositive: "OK",
                        buttonNegative: "Cancel"
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={images.focus}
                            resizeMode="stretch"
                            style={{
                                marginTop: "-55%",
                                width: 200,
                                height: 300
                            }}
                        />
                    </View>
                </RNCamera> */}
                <View
                    style={{
                        height: 200,
                        width: '100%'
                    }}
                >

                </View>
            </LinearGradient>
        </View>
    )
}

export default Scan;