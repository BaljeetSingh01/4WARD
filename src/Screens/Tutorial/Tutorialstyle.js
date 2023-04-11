import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateVerticalScale(57),
    flex: 1,
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
