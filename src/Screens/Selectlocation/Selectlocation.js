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
import { styles } from "./Selectlocationstyle";

const userlocation = [
  {
    id: 1,
    img: imagePath.grey_tick,
    txt: Strings.sector55,
  },
  {
    id: 2,
    img: imagePath.grey_tick,
    txt: Strings.sector22,
  },
  {
    id: 3,
    img: imagePath.grey_tick,
    txt: Strings.sector48,
  },
  {
    id: 4,
    img: imagePath.grey_tick,
    txt: Strings.sector26,
  },
  {
    id: 5,
    img: imagePath.grey_tick,
    txt: Strings.sector40,
  },
  {
    id: 6,
    img: imagePath.grey_tick,
    txt: Strings.sector67,
  },
];

export const Selectlocation = () => {
  const [data, setdata] = useState({ userlocation });
  const pressed = (id) => {
    let newarr = userlocation.map((value) => {
      if (value.id == id) {
        return { ...value, img: imagePath.blue_tick };
      } else {
        return value;
      }
    });
    setdata({ userlocation: newarr });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <View style={styles.topmainview}>
          <View style={styles.devicelocationview}>
            <Text style={styles.deviceloctxt}>{Strings.device_off}</Text>
            <Text style={styles.turningontxt}>
              {Strings.turning_on_device_location}
            </Text>
          </View>
          <View style={styles.turnonview}>
            <RedButton title={Strings.turn_on} btnstyle={styles.redbtn} />
          </View>
        </View>
        <View style={styles.orview}>
          <Text style={styles.ortxt}>{Strings.or}</Text>
        </View>
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
          data={data.userlocation}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatview}
              onPress={() => pressed(item.id)}
            >
              <Text style={styles.flattxt}>{item.txt}</Text>
              <Image source={item.img} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.bottomview}>
        <RedButton title={Strings.select_and_proceed} />
      </View>
    </View>
  );
};
