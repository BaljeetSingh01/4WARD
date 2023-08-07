import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./Tutorialstyle";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Card } from "../../Components/Card";
import Strings from "../../Constants/Strings";
import NavigationStrings from "../../Constants/navigationStrings";
import WrapperContainer from "../../Components/WrapperContainer";


export const Tutorial = ({ navigation }) => {
  console.log(navigation.navigate);
  return (
    <WrapperContainer containerStyle={{ backgroundColor: 'rgba(46,46,46,1)' }} >
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
        <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.login)}>
          <Text style={styles.getstarted}>{Strings.get_started}</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer >
  );
};
