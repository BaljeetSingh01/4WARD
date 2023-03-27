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
import NavigationStrings from "../../Constants/NavigationStrings";
import Strings from "../../Constants/Strings";
import { styles } from "./CreateAccountstyle";


export const CreateAccount = ({ navigation }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  function firstinput(val) {
    if (val.match("^[A-Za-z_-]*$")) {
      setfirstname(val);
    }
  }
  function lastinput(val) {
    if (val.match("^[A-Za-z_-]*$")) {
      setlastname(val);
    }
  }
  function emailinput(val) {
    
    setemail(val);
  }
  function mobileinput(val) {
    if (val.match("^[0-9]*$")) {
      setmobileno(val);
    }
  }

  function next() {
     var emailcheck=   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!firstname || !lastname  || !mobileno || !email.match(emailcheck)) {
      alert("Please enter details properly");
    } else {
      navigation.navigate(NavigationStrings.otpscreen);
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
          <Text style={styles.createnew}>{Strings.create_new_account}</Text>
          <Text style={styles.description}>
            {Strings.create_an_acc_so_u_can_continue}
          </Text>
        </View>
        <View style={styles.twoinputfieldview}>
          <View style={styles.firstfield}>
            <Inputfield
              placeholder={Strings.firstname}
              myvalue={firstname}
              ontextinput={firstinput}
            />
          </View>
          <View style={styles.secondfield}>
            <Inputfield
              placeholder={Strings.lastname}
              myvalue={lastname}
              ontextinput={lastinput}
            />
          </View>
        </View>

        <Inputfield
          placeholder={Strings.email}
          myvalue={email}
          ontextinput={emailinput}
        />
        <View style={styles.thirdinputdivision}>
          <View style={styles.countrycode}>
            <Inputfield placeholder={Strings.countrycode} />
          </View>
          <View style={styles.mobileno}>
            <Inputfield
              placeholder={Strings.mobileno}
              myvalue={mobileno}
              ontextinput={mobileinput}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => next()} style={styles.lastbtnview}>
        <RedButton title={Strings.next} />
      </TouchableOpacity>
    </View>
  );
};
