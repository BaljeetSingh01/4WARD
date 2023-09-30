import { useRef, useState } from "react";
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
import { styles } from "./Otpscreenstyle";
import OTPTextView from "react-native-otp-textinput";
import { useEffect } from "react";

export const Otpscreen = ({ navigation }) => {
  const [timer, settimer] = useState(10);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) settimer(timer - 1)
    }, 1000);
    // return () => {
    //   if (timeout) {
    //     clearTimeout(timeout)
    //   }
    // }
  }, [timer])
  const onresend = () => {
    settimer(10)
  };
  // const otp1 = useRef()
  // const otp2 = useRef()
  // const otp3 = useRef()
  // const otp4 = useRef()
  const input = useRef('')
  const [otpinput, setotpinput] = useState('')
  const handleCellTextChange = (text, i) => {

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
          <Text style={styles.enterotp}>{Strings.enter_otp}</Text>
          <Text style={styles.description}>{Strings.edit_mobile_no}</Text>
        </View>
        {/* <View style={styles.fourinputview}>
          <View style={styles.firstinput}>
            <Inputfield
              myref={otp1}
              keyboardType={'number-pad'}
              autoFocus={true}
              btnstyle={styles.inputbtnstyle}
              //  myvalue={first}
              ontextinput={val => {
                if (val.length >= 1) {
                  otp2.current.focus();
                }
              }}
              mylength={1}



            />
          </View>
          <View style={styles.secondinput}>
            <Inputfield
              myref={otp2}
              keyboardType={'number-pad'}
              btnstyle={styles.inputbtnstyle}
              // myvalue={second}
              // ontextinput={secondno}
              mylength={1}
              ontextinput={val => {
                if (val.length >= 1) {
                  otp3.current.focus();
                }
                else if (val.length < 1) {
                  otp1.current.focus()
                }
              }}

            />
          </View>
          <View style={styles.thirdinput}>
            <Inputfield
              myref={otp3}
              keyboardType={'number-pad'}
              btnstyle={styles.inputbtnstyle}
              // myvalue={third}
              // ontextinput={thirdno}
              mylength={1}
              ontextinput={val => {
                if (val.length >= 1) {
                  otp4.current.focus();
                }
                else if (val.length < 1) {
                  otp2.current.focus();
                }
              }}

            />
          </View>
          <View style={styles.fourthinput}>
            <Inputfield
              myref={otp4}
              keyboardType={'number-pad'}
              btnstyle={styles.inputbtnstyle}
              // myvalue={four}
              // ontextinput={fourno}
              mylength={1}
              ontextinput={val => {
                if (val < 1) {
                  otp3.current.focus()
                }
              }}


            />
          </View>
        </View> */}
        <OTPTextView
          ref={input}
          containerStyle={{ marginTop: 20 }}
          textInputStyle={{ backgroundColor: 'grey', borderRadius: 8, borderBottomWidth: 0, color: 'black' }}
          handleTextChange={setotpinput}
          handleCellTextChange={handleCellTextChange}
          inputCount={4}
          autoFocus
          keyboardType="numeric"
          tintColor={'white'}

        />
      </View>
      <View style={styles.resendcodeview}>
        {timer > 0 ? <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          <Text style={styles.resendtxt}>{Strings.resend_code}</Text>
          <Text style={{ marginLeft: 6, color: 'white' }}>{timer}</Text>
        </View> :
          <Text onPress={onresend}
            style={{ ...styles.resendtxt, marginBottom: 8 }}>{Strings.resend_code}</Text>}
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.setpassword)}
        >
          <RedButton title={Strings.verify} />
        </TouchableOpacity>
      </View>

    </View>
  );
};
