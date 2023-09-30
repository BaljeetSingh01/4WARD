import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { RedButton } from "../../Components/RedButton";
import imagePath from "../../Constants/imagePath";
import NavigationStrings from "../../Constants/navigationStrings";
import Strings from "../../Constants/Strings";
import { styles } from "./Loginstyle";
import WrapperContainer from "../../Components/WrapperContainer";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Modalcomp from "../../Components/Modalcomp";
import { useState } from "react";
import { changeLang, changeTheme } from "../../Redux/actions/settings";
import { storeData } from "../../utils/helperfunction";
import navigationStrings from "../../Constants/navigationStrings";



export const Login = ({ navigation }) => {
  const isDarkTheme = useSelector(state => state?.settings.isDark)
  const islang = useSelector(state => state.settings.lang)
  const [isVisible, setisVisible] = useState(false)
  // const [language, setlanguage] = useState('Eng')
  const onpresslang = (lang) => {
    // alert(lang)
    changeLang(lang)
    setisVisible(false)
  }
  const onpresstheme = (status) => {
    // alert(status)
    changeTheme(status)
    setisVisible(false)
    // storeData('theme', status)  //asynctheme
  }

  const privacypolicy = (type) => {
    if (type = 1) {
      navigation.navigate(NavigationStrings.otpscreen)
    }
    else {
      navigation.navigate(NavigationStrings.otpscreen)
    }
  }
  return (
    <WrapperContainer>

      <SafeAreaView style={styles.main}>

        <TouchableOpacity onPress={() => setisVisible(true)}
          style={{ height: 40, width: 40, backgroundColor: isDarkTheme ? 'white' : 'grey', justifyContent: 'center', alignSelf: 'flex-end', borderRadius: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600', color: isDarkTheme ? 'black' : 'white' }} >{islang}</Text>
        </TouchableOpacity>
        <Image source={imagePath.forward} style={styles.forwardimg} />

        <Text style={{ marginTop: 54, marginBottom: 24, color: isDarkTheme ? 'grey' : 'black', textAlign: 'center' }}>{Strings.By_clicking_log_in}
          <Text onPress={privacypolicy} style={{ color: 'blue' }}>Terms.<Text style={{ ...styles.text, color: isDarkTheme ? 'grey' : 'black', }}>{Strings.Learn_how}
            <Text onPress={privacypolicy} style={{ color: 'blue', }}>Policy</Text>
          </Text>
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.phonelogin);
          }}
        >
          <RedButton title={Strings.login_ph_no} />
        </TouchableOpacity>

        <Text style={{ ...styles.ortxt, color: isDarkTheme ? 'white' : 'black' }}>{Strings.or}</Text>

        <View style={styles.socialcontainer}>
          <RedButton
            btnstyle={{ ...styles.redbtnstyle, backgroundColor: isDarkTheme ? 'white' : 'grey' }}
            txtstyle={styles.redbtntxt}
            title={Strings.login_google}
            myimage={imagePath.ic_google}
          />
          <RedButton
            btnstyle={{ ...styles.redbtnstyle, backgroundColor: isDarkTheme ? 'white' : 'grey' }}
            txtstyle={styles.redbtntxt}
            title={Strings.login_facebook}
            myimage={imagePath.ic_fb}
          />
          <RedButton
            title={Strings.login_apple}
            myimage={imagePath.ic_apple}
            btnstyle={{ ...styles.redbtnstyle, backgroundColor: isDarkTheme ? 'white' : 'grey' }}
            txtstyle={styles.redbtntxt}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NavigationStrings.createaccount);
          }}
          style={styles.bottomcontainer}
        >
          <Text style={{ ...styles.newheretxt, color: isDarkTheme ? 'white' : 'black' }}>{Strings.new_here}</Text>
          <Text style={styles.signuptxt}>{Strings.sign_up}</Text>
        </TouchableOpacity>
        <Modalcomp isVisible={isVisible} onBackdropPress={() => setisVisible(false)} style={{ justifyContent: 'flex-end', margin: 0, }}>
          <View style={{ backgroundColor: 'white', padding: 16, height: 400 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>Choose Theme</Text>
            <TouchableOpacity onPress={() => onpresstheme(true)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>Dark</Text>
              <Image source={imagePath.checkbox} style={{ height: 20, width: 20, tintColor: isDarkTheme == true ? 'red' : 'black' }} />
            </TouchableOpacity >
            <TouchableOpacity onPress={() => onpresstheme(false)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>Light</Text>
              <Image source={imagePath.checkbox} style={{ height: 20, width: 20, tintColor: isDarkTheme == false ? 'red' : 'black' }} />
            </TouchableOpacity>

            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>Choose Language</Text>
            <TouchableOpacity onPress={() => onpresslang('Eng')} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>English</Text>
              <Image source={imagePath.checkbox} style={{ height: 20, width: 20, tintColor: islang == 'Eng' ? 'red' : 'black' }} />
            </TouchableOpacity >
            <TouchableOpacity onPress={() => onpresslang('Ar')} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>Arabic</Text>
              <Image source={imagePath.checkbox} style={{ height: 20, width: 20, tintColor: islang == 'Ar' ? 'red' : 'black' }} />
            </TouchableOpacity>
          </View>
        </Modalcomp>
      </SafeAreaView>
    </WrapperContainer>
  );
};
