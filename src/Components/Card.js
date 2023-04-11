import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../Constants/imagePath";

import Strings from "../Constants/Strings"
export const Card = () => {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={imagePath.ic_1}
        style={styles.img}
      />
      <View style={styles.view1}>
        <Text style={styles.txt1}>
          {Strings.Hendrerit}
        </Text>
        <Text
          style={styles.txt2}
        >
          {Strings.Aeneantxt}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: moderateScale(8),
    // marginTop: 57,
    backgroundColor: "#4C4C4C",
    height: moderateVerticalScale(647),
    width: moderateScale(328),
    alignItems: "center",
    borderRadius: 8,
  },
  img: {
    height: 245,
    width: 265,
    marginTop: 100,
  },
  view1: { marginTop: 90, marginHorizontal: 24, width: 280 },
  txt1: { fontSize: 22, color: "#FFFFFF", textAlign: "center" },
  txt2: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
    color: "#999999",
  }


})