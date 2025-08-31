import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const spacing = {
  xs: width < 360 ? 2 : 4,   // extra small
  s: width < 360 ? 4 : 8,    // small
  m: width < 360 ? 8 : 16,   // medium
  l: width < 360 ? 12 : 24,  // large
  xl: width < 360 ? 16 : 32, // extra large
  xxl: width < 360 ? 20 : 40, // double extra large
  xxxl: width < 360 ? 20 : 48, // triple extra large
};
