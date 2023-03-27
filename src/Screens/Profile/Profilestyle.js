import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2E2E2E" },
  main: { paddingHorizontal: moderateScale(24) },
  profile: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    marginTop: moderateVerticalScale(56),
    marginBottom: moderateVerticalScale(34),
  },
});
