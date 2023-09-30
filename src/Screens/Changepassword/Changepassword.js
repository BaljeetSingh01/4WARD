import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Inputfield } from "../../Components/Inputfield";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import Strings from "../../Constants/Strings";
import { styles } from "./Changepasswordstyle";
export const Changepassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <View style={styles.editprofileview}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backarrowview}
          >
            <Image source={imagePath.ic_back_arrow} />
          </TouchableOpacity>
          <Text style={styles.txt}>{Strings.changepass}</Text>
        </View>

        <View style={styles.bothinputview}>
          <Inputfield placeholder={Strings.password} Show={Strings.show} />
          <Inputfield placeholder={Strings.confirm_password} Show={Strings.show} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {

        }}
        style={styles.lastbtnview}
      >
        <RedButton title={Strings.save} />
      </TouchableOpacity>
    </View>
  );
};
