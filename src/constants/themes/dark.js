import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#7f7f7f", // cyan
    secondary: "#212121",   // dark cyan

    cyan: "#62E7F2",
    lightCyan: "#e6fcfe",

    bg1: "#575757",
    bg2: "#4f4f4f",
    bg_gd_top: "#575757bb",
    bg_gd_down: "#4f4f4fbb",
    bg_back: "#1E1F20",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    transparent: "transparent",

    text_pri: "#CACACA",
    text_sec: "#919090",
    text_link: "#ffffff",
    logo_tint: "#CACACA",
    ring1: "#575757",
    ring2: "#4f4f4f",
    ring3: "#4f4f4fbb",
    border_color: "#7f7f7f",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36, letterSpacing: 2 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30, letterSpacing: 2 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22, letterSpacing: 2 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22, letterSpacing: 2 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36, letterSpacing: 2 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30, letterSpacing: 2 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22, letterSpacing: 2 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22, letterSpacing: 2 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22, letterSpacing: 2 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;