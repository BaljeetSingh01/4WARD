import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccount } from "../Screens/CreateAccount/CreateAccount";
import { Firstbanner } from "../Screens/Firstbanner/Firstbanner";
import { Home } from "../Screens/Home/Home";
import { Login } from "../Screens/Login/Login";
import { Otpscreen } from "../Screens/Otpscreen/Otpscreen";
import { PhoneLogin } from "../Screens/PhoneLogin/PhoneLogin";
import { Search } from "../Screens/Search/Search";
import { Selectlocation } from "../Screens/Selectlocation/Selectlocation";
import { Setpassword } from "../Screens/Setpassword/Setpassword";
import { Tutorial } from "../Screens/Tutorial/Tutorial";
import Bottomtabs from "./Bottomtabs";
import NavigationStrings from "../Constants/navigationStrings";

const Stack = createNativeStackNavigator();

export const Authstack = () => {
  return (

    < >
      <Stack.Screen name={NavigationStrings.tutorial} component={Tutorial} />
      <Stack.Screen name={NavigationStrings.login} component={Login} />
      <Stack.Screen name={NavigationStrings.phonelogin} component={PhoneLogin} />
      <Stack.Screen name={NavigationStrings.createaccount} component={CreateAccount} />
      <Stack.Screen name={NavigationStrings.otpscreen} component={Otpscreen} />
      <Stack.Screen name={NavigationStrings.setpassword} component={Setpassword} />
      <Stack.Screen name={NavigationStrings.selectlocation} component={Selectlocation} />
    </>

  );
};
