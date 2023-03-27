import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./Tutorialstyle";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Card } from "../../Components/Card";
import Strings from "../../Constants/Strings";
import NavigationStrings from "../../Constants/NavigationStrings";


export const Tutorial = ({ navigation }) => {
  console.log(navigation.navigate);
  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <Card />
          <Card />
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.Login)}>
        <Text style={styles.getstarted}>{Strings.get_started}</Text>
      </TouchableOpacity>
    </View>
  );
};
