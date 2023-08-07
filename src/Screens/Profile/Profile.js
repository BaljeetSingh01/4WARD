import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { ProfileComp } from "../../Components/ProfileComp";
import imagePath from "../../Constants/imagePath";
import NavigationStrings from "../../Constants/navigationStrings";
import Strings from "../../Constants/Strings";
import { statuscheck } from "../../Redux/actions/actionlogin";
import { styles } from "./Profilestyle";

export const Profile = ({ navigation }) => {

  async function Signout() {
    statuscheck(false)
    await AsyncStorage.removeItem('userLoginData')
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.profile}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.editprofile)}>
          <ProfileComp mytxt={Strings.editprofile} myimg={imagePath.user} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.changepassword)}>
          <ProfileComp mytxt={Strings.changepass} myimg={imagePath.key} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Signout()}>
          <ProfileComp mytxt={Strings.signout} myimg={imagePath.signout} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
