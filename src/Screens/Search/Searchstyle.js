import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  mvs,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateVerticalScale(56),
    flex: 1,
    backgroundColor: "#2E2E2E",
    paddingHorizontal: moderateScale(24),
  },

  inputfieldview: {
    justifyContent: "center",
    backgroundColor: "#4C4C4C",
    borderRadius: 8,
    height: moderateVerticalScale(48),
    width: moderateScale(328),
    paddingHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
  },
  suggestionview: { marginBottom: moderateVerticalScale(16) },
  suggtxt: { color: "#FFFFFF", fontWeight: "bold" },

  flatview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateVerticalScale(32),
  },
  flattxt: { color: "#C7C8C7" },
});
