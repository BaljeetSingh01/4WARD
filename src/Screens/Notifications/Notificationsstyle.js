import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2E2E2E" },
  main: { paddingHorizontal: moderateScale(24) },
  notification: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginTop: moderateVerticalScale(56),
  },
  flatview: {
   
    flexDirection: "row",
    marginTop: moderateVerticalScale(24),
  },
  img: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    tintColor: "white",
  },
  txtview: {  borderBottomWidth:1,width:'100%',paddingBottom:17,
    borderBottomColor:'rgba(151,151,151,0.5)',marginLeft: moderateScale(16) },
  txt1: {
    color: "#F43738",
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  txt2: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  txt3: {
    color: "rgba(181,176,176,0.5)",
    fontSize: moderateScale(12),
  },
});
