import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Homecard } from "./src/Components/Homecard";
import { Authstack } from "./src/Navigations/Authstack";
import { Mainstack } from "./src/Navigations/Mainstack";
import { Routes } from "./src/Navigations/Routes";
import { CreateAccount } from "./src/Screens/CreateAccount/CreateAccount";
import { Home } from "./src/Screens/Home/Home";
import { Login } from "./src/Screens/Login/Login";
import { Otpscreen } from "./src/Screens/Otpscreen/Otpscreen";
import { PhoneLogin } from "./src/Screens/PhoneLogin/PhoneLogin";
import { Selectlocation } from "./src/Screens/Selectlocation/Selectlocation";
import { Setpassword } from "./src/Screens/Setpassword/Setpassword";
import { Tutorial } from "./src/Screens/Tutorial/Tutorial";

export default function App() {
  return <Routes/>;
}
