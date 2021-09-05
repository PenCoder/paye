import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#ebebeb", // cyan
    secondary: "#b0b0b0",   // dark cyan

    cyan: "#62E7F2",
    lightCyan: "#e6fcfe",

    bg1: "#d0d7d9",
    bg2: "#d9ddde",
    bg_gd_top: "#edededbb",
    bg_gd_down: "#d9dddebb",
    bg_back: "#dfe4e6",

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

    text_pri: "#454444",
    text_sec: "#b0b0b0",
    text_link: "#1E1F20",
    logo_tint: "#545454",
    ring1: "#d0d7d9",
    ring2: "#d9ddde",
    ring3: "#d9dddebb",
    border_color: "#C3C6C7",
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