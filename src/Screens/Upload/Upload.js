import { View, Image, Text } from "react-native";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

import { Inputfield } from "../../Components/Inputfield";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import Strings from "../../Constants/Strings";
import { styles } from "./Uploadstyle";

export const Upload = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <View style={styles.addinfoview}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backarrow}
          >
            <Image source={imagePath.ic_back_arrow} />
          </TouchableOpacity>
          <Text style={styles.txt}>{Strings.addinfo}</Text>
        </View>

        <View
          style={styles.view1}
        >
          <Image source={imagePath.plus} />
        </View>
        <View
          style={styles.descview}
        >
          <TextInput
            placeholder="Write description here"
            placeholderTextColor={"rgba(255,255,255,0.5)"}
            style={styles.description}
          />
        </View>
        <View
          style={styles.addlocview}
        >
          <TextInput
            placeholder="Add location"
            placeholderTextColor={'"rgba(255,255,255,0.5)"'}
            style={styles.aadlocation}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.lastbtnview}>
        <RedButton title={Strings.post} />
      </TouchableOpacity>
    </View>
  );
};
