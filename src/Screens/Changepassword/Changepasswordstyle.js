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
 
  editprofileview: {
    flexDirection: "row",
    marginTop: moderateVerticalScale(56),
    alignItems: "center",
  },
  txt: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  setpassword: {
    marginTop: moderateVerticalScale(16),
    color: "#FFFFFF",
    fontSize: 24,
    height: moderateVerticalScale(40),
  },
  description: { color: "#A6A6A6" },

  bothinputview: { marginTop: moderateVerticalScale(42), gap: 16 },
  lastbtnview: { flex: 0.1 },
});
