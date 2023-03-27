import { View, Image, Text } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const Homecard = () => {
  return (
    <View
      style={{
        marginTop: 50,
        marginLeft: 30,
        backgroundColor: "#4C4C4C",
        height: moderateVerticalScale(520),
        width: moderateScale(328),
        borderRadius: moderateScale(6),
      }}
    >
      <View
        style={{
          flexDirection: "row",

          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateVerticalScale(16),
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/ic_google.png")}
          style={{
            height: moderateVerticalScale(40),
            width: moderateScale(40),
          }}
        />
        <View style={{ marginLeft: moderateScale(16) }}>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            Russell Gordon
          </Text>
          <Text style={{ fontSize: moderateScale(13), color: "#AEAEAE" }}>
            Sector 28D, Chandigarh
          </Text>
        </View>
        <Image
          source={require("../assets/images/ic_dots.png")}
          style={{ marginLeft: "auto" }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: moderateScale(8),
          marginBottom: moderateScale(16),
        }}
      >
        <Image
          source={require("../assets/images/homeimg1.png")}
          style={{
            height: moderateVerticalScale(312),
            width: moderateScale(312),
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: moderateScale(16),
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          turpis luctus.
        </Text>
        <Text
          style={{
            color: "#BFBFBF",
            fontSize: 13,
            marginTop: moderateVerticalScale(8),
          }}
        >
          1 hr ago
        </Text>
      </View>
      <View
        style={{
          marginTop: moderateVerticalScale(8),
          paddingVertical: moderateVerticalScale(8),
          paddingHorizontal: moderateScale(16),
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 15 }}>Comments 1,254</Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            marginLeft: moderateScale(16),
          }}
        >
          Likes 44,686
        </Text>
        <Image
          source={require("../assets/images/ic_direction.png")}
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
};
