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
  backarrowview: {

    width: moderateScale(20),
    marginTop: moderateVerticalScale(56),
  },
  enterotp: {
    marginTop: moderateVerticalScale(16),
    color: "#FFFFFF",
    fontSize: 24,
  },
  description: { color: "#32C5FF", marginTop: moderateVerticalScale(8) },

  fourinputview: {
    flexDirection: "row",
    marginTop: moderateVerticalScale(32),
    gap: moderateScale(16),
  },
  firstinput: { flex: 0.13 },
  secondinput: { flex: 0.13 },
  thirdinput: { flex: 0.13 },
  fourthinput: { flex: 0.13 },
  inputbtnstyle: { paddingHorizontal: moderateScale(5) },

  resendcodeview: { flex: 0.2, },
  resendtxt: { color: "#FFFFFF" },

  lastbtnview: { flex: 0.1 },
});
