import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Inputfield } from "../../Components/Inputfield";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import NavigationStrings from "../../Constants/navigationStrings";
import Strings from "../../Constants/Strings";
import { styles } from "./Setpasswordstyle";
export const Setpassword = ({ navigation }) => {
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')


  function confirmpass(val) {
    setconfirmpassword(val)
  }

  function getstarted() {
    if (password == '' || confirmpassword == '' || password != confirmpassword) {
      alert('Please fill password properly')
    }
    else {
      navigation.navigate(NavigationStrings.selectlocation)
    }
  }




  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backarrowview}
        >
          <Image source={imagePath.ic_back_arrow} />
        </TouchableOpacity>

        <View>
          <Text style={styles.setpassword}>{Strings.set_password}</Text>
          <Text style={styles.description}>
            {Strings.create_secure_unique_password}
          </Text>
        </View>
        <View style={styles.bothinputview}>
          <Inputfield placeholder={Strings.password} value={password} ontextinput={(val) => { setpassword(val) }} />
          <Inputfield placeholder={Strings.confirm_password} value={confirmpassword} ontextinput={confirmpass} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => { getstarted() }}
        style={styles.lastbtnview}
      >
        <RedButton title={Strings.get_started} />
      </TouchableOpacity>
    </View>
  );
};
