import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  upperflatview: {
    flex: 0.8,
    flexDirection: "row",
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(48),
    // alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    height: moderateVerticalScale(40),
    width: moderateScale(40),
  },
  textview: { marginLeft: moderateScale(16) },
  txt1: {
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    fontWeight: "500",
  },
  txt2: { fontSize: moderateScale(13), color: "#FFFFFF" },
  crossimg: { marginLeft: "auto", marginVertical: moderateVerticalScale(8) },

  descriptionview: {
    flex: 0.1,
    marginVertical: moderateVerticalScale(1),
    paddingHorizontal: moderateScale(24),
  },
  destxt1: { color: "#FFFFFF", fontSize: 15 },
  destxt2: {
    color: "#BFBFBF",
    fontSize: 13,
    marginTop: moderateVerticalScale(8),
  },

  bottomview: {
    flex: 0.1,
    marginHorizontal: moderateScale(24),
    marginTop: moderateVerticalScale(16),
  },
});
