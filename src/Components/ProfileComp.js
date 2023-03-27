import { View, Image, Text } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const ProfileComp = ({ mytxt, myimg }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: moderateVerticalScale(32),
      }}
    >
      <Image
        source={myimg}
        style={{ width: moderateScale(20), resizeMode: "contain" }}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: moderateScale(15),
          marginLeft: moderateScale(20),
        }}
      >
        {mytxt}
      </Text>
    </View>
  );
};
