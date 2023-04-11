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

const Stack = createNativeStackNavigator();

export const Authstack = () => {
  return (

    <>
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Otpscreen" component={Otpscreen} />
      <Stack.Screen name="Setpassword" component={Setpassword} />
      <Stack.Screen name="Selectlocation" component={Selectlocation} />
    </>

  );
};
