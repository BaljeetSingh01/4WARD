import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    paddingHorizontal: moderateScale(24),
  },
  upperview: { flex: 0.9 },
  topmainview: {
    marginTop: moderateVerticalScale(56),
    flexDirection: "row",
  },
  devicelocationview: { flex: 0.8 },
  deviceloctxt: {
    color: "#FFFFFF",
    fontSize: 24,
    height: moderateScale(40),
    fontWeight: "bold",
  },
  turningontxt: { color: "#C7C8C7", fontSize: 15 },

  turnonview: { flex: 0.3 },

  redbtn: {
    height: moderateVerticalScale(32),
    fontSize: 12,
  },

  orview: { marginVertical: moderateVerticalScale(16) },
  ortxt: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: moderateScale(16),
  },

  inputfieldview: {
    justifyContent: "center",
    backgroundColor: "#4C4C4C",
    borderRadius: 8,
    height: moderateVerticalScale(48),
    width: moderateScale(328),
    paddingHorizontal: moderateScale(16),
    marginVertical: moderateVerticalScale(16),
  },
  suggestionview: { marginBottom: moderateVerticalScale(16) },
  suggtxt: { color: "#FFFFFF", fontWeight: "bold" },

  flatview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateVerticalScale(32),
  },
  flattxt: { color: "#C7C8C7" },

  bottomview: { flex: 0.1 },
});
