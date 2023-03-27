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
  view1:{
    alignItems: "center",
    height: moderateVerticalScale(64),
    width: moderateScale(64),
    marginVertical: moderateVerticalScale(16),
    backgroundColor: "#4C4C4C",
    justifyContent: "center",
    borderRadius: moderateScale(8),
  },
  descview:{
    backgroundColor: "#4C4C4C",
    borderRadius: moderateScale(8),
    marginBottom: 16,
  },
  description:{
    marginLeft: moderateScale(16),
    marginTop: moderateVerticalScale(8),
    paddingBottom: 88,
  },
  addlocview:{
    height: 48,
    backgroundColor: "#4C4C4C",
    borderRadius: moderateScale(8),
  },
  aadlocation:{
    paddingLeft: moderateScale(16),
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: "center",
  },

  lastbtnview: { flex: 0.1 },
});
