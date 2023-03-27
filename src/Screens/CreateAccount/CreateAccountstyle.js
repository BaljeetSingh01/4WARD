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
  createnew: {
    marginTop: moderateVerticalScale(16),
    color: "#FFFFFF",
    fontSize: 24,
    height: moderateVerticalScale(40),
  },
  description: { color: "#A6A6A6" },

  twoinputfieldview: {
    flexDirection: "row",
    gap: 16,
    marginTop: moderateVerticalScale(32),
    marginBottom: moderateVerticalScale(16),
  },
  firstfield: {
    flex: 0.5,
  },
  secondfield: {
    flex: 0.5,
  },

  thirdinputdivision: {
    flexDirection: "row",
    gap: 16,
    marginTop: moderateVerticalScale(16),
  },
  countrycode: { flex: 0.3 },
  mobileno: { flex: 0.7 },

  lastbtnview: { flex: 0.1 },
});
