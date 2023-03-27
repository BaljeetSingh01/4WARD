import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    paddingLeft: moderateVerticalScale(15),
  },
  getstarted: {
    fontSize: moderateScale(15),
    color: "white",
    marginHorizontal: moderateScale(23),
    marginTop: moderateVerticalScale(24),
    marginLeft: "auto",
  },
});
