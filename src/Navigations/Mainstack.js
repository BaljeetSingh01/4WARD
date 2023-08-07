import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Changepassword } from "../Screens/Changepassword/Changepassword";
import { Editprofile } from "../Screens/Editprofile/Editprofile";
import { Firstbanner } from "../Screens/Firstbanner/Firstbanner";
import Bottomtabs from "./Bottomtabs";
import NavigationStrings from "../Constants/navigationStrings";

const Stack = createNativeStackNavigator()
export const Mainstack = () => {
  return (
    <>
      <Stack.Screen name={NavigationStrings.bottomtabs} component={Bottomtabs} />
      <Stack.Screen name={NavigationStrings.firstbanner} component={Firstbanner} />
      <Stack.Screen name={NavigationStrings.editprofile} component={Editprofile} />
      <Stack.Screen name={NavigationStrings.changepassword} component={Changepassword} />
    </>
  );
};
