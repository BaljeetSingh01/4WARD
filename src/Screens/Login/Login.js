import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import NavigationStrings from "../../Constants/NavigationStrings";
import Strings from "../../Constants/Strings";
import { styles } from "./Loginstyle";
import WrapperContainer from "../../Components/WrapperContainer";

export const Login = ({ navigation }) => {
  return (
    <WrapperContainer containerStyle={{ backgroundColor: 'rgba(46,46,46,1)' }}>

      <View style={styles.main}>
        <Image source={imagePath.forward} style={styles.forwardimg} />
        <Text style={styles.text}>{Strings.By_clicking_log_in}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.phonelogin);
          }}
        >
          <RedButton title={Strings.login_ph_no} />
        </TouchableOpacity>

        <Text style={styles.ortxt}>{Strings.or}</Text>

        <View style={styles.socialcontainer}>
          <RedButton
            btnstyle={styles.redbtnstyle}
            txtstyle={styles.redbtntxt}
            title={Strings.login_google}
            myimage={imagePath.ic_google}
          />
          <RedButton
            btnstyle={styles.redbtnstyle}
            txtstyle={styles.redbtntxt}
            title={Strings.login_facebook}
            myimage={imagePath.ic_fb}
          />
          <RedButton
            title={Strings.login_apple}
            myimage={imagePath.ic_apple}
            btnstyle={styles.redbtnstyle}
            txtstyle={styles.redbtntxt}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.createaccount);
          }}
          style={styles.bottomcontainer}
        >
          <Text style={styles.newheretxt}>{Strings.new_here}</Text>
          <Text style={styles.signuptxt}>{Strings.sign_up}</Text>
        </TouchableOpacity>
      </View>

    </WrapperContainer>
  );
};
