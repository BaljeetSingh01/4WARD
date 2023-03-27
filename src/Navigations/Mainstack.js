import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Changepassword } from "../Screens/Changepassword/Changepassword";
import { Editprofile } from "../Screens/Editprofile/Editprofile";
import { Firstbanner } from "../Screens/Firstbanner/Firstbanner";
import Bottomtabs from "./Bottomtabs";

const Stack=createNativeStackNavigator()
export const Mainstack = () => {
  return (
     <>
        <Stack.Screen name="Bottomtabs" component={Bottomtabs} />
        <Stack.Screen name="Firstbanner" component={Firstbanner} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Changepassword" component={Changepassword} />
        </>
  );
};
