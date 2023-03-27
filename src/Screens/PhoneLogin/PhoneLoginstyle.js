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
  upperview: {
    flex: 0.9,
  },
  backarrowview: {
  
    width: 20,
    marginTop: moderateVerticalScale(56),
  },
  welcome: {
    marginTop: moderateVerticalScale(16),
    color: "#FFFFFF",
    fontSize: 24,
    height: moderateVerticalScale(40),
  },
  description: { color: "#A6A6A6", height: moderateVerticalScale(24) },

  twoinputfieldview: {
    marginTop: moderateVerticalScale(32),
    flexDirection: "row",
    gap: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
  },
  firstfield: { flex: 0.3 },
  secondfield: { flex: 0.7 },
  useotpview: {
    marginTop: moderateVerticalScale(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  useotptxt: { color: "rgba(255,255,255,1)" },
  forgottxt: { color: "#32C5FF" },
  lastbtnview: { flex: 0.1 },
});
