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
import Strings from "../../Constants/Strings";
import { styles } from "./PhoneLoginstyle";
import AsyncStorage from "@react-native-async-storage/async-storage"
export const PhoneLogin = ({ navigation }) => {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const[passview,setpassview]=useState(true)
  const[showtohide,settohide]=useState('Show')


  function show(){
    if(passview==true){
    setpassview(false)
    settohide('Hide')
  }
    if(passview==false){
     setpassview(true)
     settohide('Show')
    }
  }
  
 const saveTOAsyncstore= async ()=>{
  let datatoStore={
    userPhone: mobile,
    userPassword: password
  }
  await AsyncStorage.setItem('userLoginData', JSON.stringify(datatoStore));
  }


  function mobileInput(val) {
    if (val.match("^[0-9]*$")) {
      setmobile(val);
    }
  }

  function passinput(val) {
    setpassword(val);
  }

  function logincheck() {
    if (!mobile || !password) {
      alert("Please enter details properly");
    }
    else{
      saveTOAsyncstore()

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
          <Text style={styles.welcome}>{Strings.Welcome}</Text>
          <Text style={styles.description}>{Strings.we_are_happy}</Text>
        </View>
        <View style={styles.twoinputfieldview}>
          <View style={styles.firstfield}>
            <Inputfield placeholder={Strings.countrycode} />
          </View>
          <View style={styles.secondfield}>
            <Inputfield
              placeholder={Strings.mobileno}
              ontextinput={mobileInput}
              myvalue={mobile}
              mylength={10}
            />
          </View>
        </View>
        <Inputfield
        
          placeholder={Strings.password}
          ontextinput={passinput}
          myvalue={password}
          mylength={30}
          
          Show={showtohide}
          onPress={show}
          secureTextEntry={passview}
        />
        <View style={styles.useotpview}>
          <Text style={styles.useotptxt}>{Strings.use_otp}</Text>
          <Text style={styles.forgottxt}>{Strings.forgot_password}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {logincheck() }} style={styles.lastbtnview}>
        <RedButton title={Strings.login} />
      </TouchableOpacity>
    </View>
  );
};
