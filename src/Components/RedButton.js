import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const RedButton = ({ title, myimage, btnstyle, txtstyle }) => {
  return (
    // <View>
    <View style={{ ...styles.btncontainer, ...btnstyle }}>
      {!!myimage ? <Image source={myimage} style={styles.btnimage} /> : null}

      <View style={{ flex: 1 }}>
        <Text style={{ ...styles.btntext, ...txtstyle }}>{title}</Text>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    backgroundColor: "#F43738",
    height: 48,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
  },
  btnimage: {},
  btntext: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    // marginRight: moderateScale(18),
  },
});
