import { useState } from "react";
import { View, Image, Text } from "react-native";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Inputfield } from "../../Components/Inputfield";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import Strings from "../../Constants/Strings";
import { styles } from "./Editprofilestyle";

export const Editprofile = ({ navigation }) => {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");

  function firstinput(val) {
    if (val.match("^[A-Za-z_-]*$")) setfirstname(val);
  }
  function lastinput(val) {
    if (val.match("^[A-Za-z_-]*$")) setlastname(val);
  }
  function emailinput(val) {
    setemail(val);
  }
  function mobileinput(val) {
    if (val.match("^[0-9]*$")) {
      setmobileno(val);
    }
  }

  function save() {
    if (firstname == '' || !lastname || !email || !mobileno) {
      alert("Please enter details properly");
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <View style={styles.editprofileview}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backarrow}
          >
            <Image source={imagePath.ic_back_arrow} />
          </TouchableOpacity>
          <Text style={styles.txt}>{Strings.editprofile}</Text>
        </View>
        <View style={styles.imgview}>
          <Image source={imagePath.editprofile} style={styles.img}

          />
        </View>

        <View style={styles.twoinputfieldview}>
          <View style={styles.firstfield}>
            <Inputfield placeholder={Strings.firstname} value={firstname} ontextinput={firstinput} />
          </View>
          <View style={styles.secondfield}>
            <Inputfield placeholder={Strings.lastname} value={lastname} ontextinput={lastinput} />
          </View>
        </View>

        <Inputfield placeholder={Strings.email} value={email} ontextinput={emailinput} />
        <View style={styles.thirdinputdivision}>
          <View style={styles.countrycode}>
            <Inputfield placeholder={Strings.countrycode} />
          </View>
          <View style={styles.mobileno}>
            <Inputfield placeholder={Strings.no} value={mobileno} ontextinput={mobileinput} />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => save()}

        style={styles.lastbtnview}
      >
        <RedButton title={Strings.savechanges} />
      </TouchableOpacity>
    </View>
  );
};
