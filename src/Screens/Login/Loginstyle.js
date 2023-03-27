import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2E2E2E" },
  main: {
    paddingHorizontal: moderateScale(24),
  },
  forwardimg: {
    width: moderateScale(121),
    height: moderateVerticalScale(178),
    alignSelf: "center",
    marginTop: moderateVerticalScale(120),
  },
  text: {
    color: "#9C9C9C",
    fontSize: 13,
    marginTop: moderateVerticalScale(54),
    textAlign: "center",
    marginBottom: moderateVerticalScale(24),
  },
  ortxt: {
    color: "white",
    height: moderateVerticalScale(32),
    width: moderateScale(328),
    marginVertical: moderateVerticalScale(16),
    textAlign: "center",
  },
  socialcontainer: { gap: 16 },

  redbtnstyle: { backgroundColor: "#FFFFFF" },
  redbtntxt: { color: "#17171A" },

  bottomcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: moderateVerticalScale(16),
  },
  newheretxt: { color: "#FFFFFF" },
  signuptxt: { color: "#41CCFF" },
});
