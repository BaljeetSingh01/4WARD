import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2E2E2E" },

  mainview: { paddingHorizontal: moderateScale(24) },
  headerview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateVerticalScale(56),
    marginBottom: moderateVerticalScale(12),
  },
  view1: { marginBottom: moderateVerticalScale(230) },
  flatlistview: {
    marginVertical: moderateVerticalScale(12),
    backgroundColor: "#4C4C4C",
    height: moderateVerticalScale(520),
    // width: moderateScale(328),
    borderRadius: moderateScale(6),
  },
  upperflatview: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(16),
    alignItems: "center",
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
  txt2: { fontSize: moderateScale(13), color: "#AEAEAE" },
  dotimg: { marginLeft: "auto" },

  bannerimgview: {
    // paddingHorizontal: moderateScale(8),
    marginBottom: moderateScale(16),
    alignItems:'center'
  },
  bannerimg: {
    height: moderateVerticalScale(312),
    width: moderateScale(312),
  },
  descriptionview: {
    paddingHorizontal: moderateScale(16),
  },
  destxt1: { color: "#FFFFFF", fontSize: 15 },
  destxt2: {
    color: "#BFBFBF",
    fontSize: 13,
    marginTop: moderateVerticalScale(8),
  },
  bottomview: {
    marginTop: moderateVerticalScale(8),
    paddingVertical: moderateVerticalScale(8),
    paddingHorizontal: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
  },
  bottomtxt1: { color: "#FFFFFF", fontSize: 15 },
  bottomtxt2: {
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: moderateScale(16),
  },
  bottomimg: { marginLeft: "auto" },
});
