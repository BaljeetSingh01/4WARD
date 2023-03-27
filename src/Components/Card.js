import { Image, View, Text, ScrollView } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../Constants/imagePath";
import Strings from "../Constants/Strings";

export const Card = () => {
  return (
    <View
      style={{
        marginLeft: moderateScale(8),
        marginTop: 57,
        backgroundColor: "#4C4C4C",
        height: moderateVerticalScale(647),
        width: moderateScale(328),
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      <Image
        source={imagePath.ic_1}
        style={{
          height: 245,
          width: 265,
          marginTop: 100,
        }}
      />
      <View style={{ marginTop: 90, marginHorizontal: 24, width: 280 }}>
        <Text style={{ fontSize: 22, color: "#FFFFFF", textAlign: "center" }}>
          {Strings.Hendrerit}
        </Text>
        <Text
          style={{
            marginTop: 8,
            textAlign: "center",
            fontSize: 13,
            color: "#999999",
          }}
        >
          {Strings.Aeneantxt}
        </Text>
      </View>
    </View>
  );
};
