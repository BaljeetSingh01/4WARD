import { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import Strings from "../../Constants/Strings";
import { styles } from "./Searchstyle";

const userlocation = [
  {
    txt: Strings.sector55,
  },
  {
    txt: Strings.sector22,
  },
  {
    txt: Strings.sector48,
  },
  {
    txt: Strings.sector26,
  },
  {
    txt: Strings.sector40,
  },
  {
    txt: Strings.sector67,
  },
];

export const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputfieldview}>
        <TextInput
          placeholder={Strings.enter_location}
          placeholderTextColor={Strings.inputfieldcolor}
        ></TextInput>
      </View>
      <View style={styles.suggestionview}>
        <Text style={styles.suggtxt}>{Strings.suggestions}</Text>
      </View>
      <FlatList
        data={userlocation}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.flatview}>
            <Text style={styles.flattxt}>{item.txt}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
