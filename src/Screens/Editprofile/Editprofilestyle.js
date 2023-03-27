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
    height:24
  },
 backarrow:{width:24},
  
  txt: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  imgview: { alignItems: "center", marginTop: moderateVerticalScale(42) },
  img: {
    borderRadius: 100,
    height: moderateVerticalScale(100),
    width: moderateScale(100),
  },

  twoinputfieldview: {
    flexDirection: "row",
    gap: 16,
    marginTop: moderateVerticalScale(52),
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
